

import { TaskList } from "./TaskList"
import { AddGroup, AddGPTGroup} from "./AddGroup"
import { useSelector } from "react-redux"
import { GroupHeader } from "./GroupHeader"
import { MinimaizedGRoup } from "./MinimaizedGroup"
import React, { useState, useEffect, useRef } from "react"
import { reorderWithEdge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/util/reorder-with-edge"
import { draggable, dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter"
import { preserveOffsetOnSource } from "@atlaskit/pragmatic-drag-and-drop/element/preserve-offset-on-source"
import { attachClosestEdge, extractClosestEdge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge"
import { setCustomNativeDragPreview } from "@atlaskit/pragmatic-drag-and-drop/element/set-custom-native-drag-preview"

import { store, updateBoard } from "../store/store.js"
import { GroupEdit } from "./GroupEdit.jsx"
import { CopyListForm } from "./CopyListForm.jsx"
import { MoveListForm } from "./MoveListForm.jsx"
import { MoveAll } from "./MoveAll.jsx"
import { GroupSort } from "./GroupSort.jsx"
import { SOCKET_UPDATE_BOARD, socketService } from "../services/util.service.js"
import { UPDATE_BOARD } from "../store/reducers/board.reducer.js"

const GROUP_SYMBOL = Symbol("group")

function getGroupData({ group, rect }) {
    return {
        [GROUP_SYMBOL]: true,
        group,
        rect,
    }
}

function isGroupData(obj) {
    return Boolean(obj && obj[GROUP_SYMBOL])
}

export function GroupList({
    onLoadTask,
    onMoveCard,
    onReorderCard,
    Placeholder,
    onSetPlaceholderHeight,
    placeholderHeight,
    onsetQuickEdit,
    showQuickEdit,
    useDarkTextColors,
}) {
    const boardToShow = useSelector((state) => state.boardModule.board)
    const [largeLabels, setLargeLabels] = useState(false)
    const [showGroupEdit, SetGroupEdit] = useState(false)
    const [showCopyList, setCopyList] = useState(false)
    const [showMoveList, setMoveList] = useState(false)
    const [showMoveAll, setMoveAll] = useState(false)
    const [showSort, setSort] = useState(false)
    const [header, setHeader] = useState(null)
    const [grp, setGroup] = useState(null)

    const containerRef = useRef(null)
  
    function onSetSort() {
        setSort(!showSort)
    }

    function onSetGroupEdit() {
        SetGroupEdit(!showGroupEdit)
    }

    function onSetCopyList() {
        setCopyList(!showCopyList)
    }

    function onSetMoveList() {
        setMoveList(!showMoveList)
    }

    function onSetMoveAll() {

        setMoveAll(!showMoveAll)
    }
    function toggleLargeLabels(ev) {
        ev.stopPropagation()
        setLargeLabels(!largeLabels)
    }
    const groupRefs = useRef({})
    function getGroupRef(groupId) {
        if (!groupRefs.current[groupId]) {
            groupRefs.current[groupId] = React.createRef()
        }
        return groupRefs.current[groupId]
    }
    const [shadowGroup, setShadowGroup] = useState(null)

    useEffect(() => {
        if (!boardToShow?.groups) return

        boardToShow.groups.forEach((group) => {
            const ref = groupRefs.current[group.id]
            if (!ref?.current) return
            const el = ref.current

            draggable({
                element: el,
                getInitialData({ element }) {
                    return getGroupData({
                        group,
                        rect: element.getBoundingClientRect(),
                    })
                },
                onGenerateDragPreview({ location, nativeSetDragImage, source }) {
                    setCustomNativeDragPreview({
                        nativeSetDragImage,
                        getOffset: preserveOffsetOnSource({ element: el, input: location.current.input }),
                        render({ container }) {
                            const { width, height } = el.getBoundingClientRect();
                            const computedStyles = window.getComputedStyle(el);
                            const wrapper = document.createElement("div");
                            wrapper.className = "group-lists";
                            const clone = el.cloneNode(true);
                            clone.style.width = width + "px";
                            clone.style.height = height + "px";
                            clone.style.backgroundColor = computedStyles.backgroundColor || "#fff";
                            clone.style.opacity = "1";
                            clone.style.setProperty("opacity", "1", "important");
                            clone.style.pointerEvents = "none";
                            clone.style.borderRadius = computedStyles.borderRadius;
                            // clone.style.boxShadow = "0 6px 16px rgba(0,0,0,0.3)";
                            // clone.style.transform = "translateY(-2px) scale(1.02)";
                            clone.style.zIndex = "1000";
                            wrapper.style.overflow = "hidden";
                            clone.querySelectorAll("*").forEach(child => {
                                child.style.removeProperty("opacity");
                            });
                            wrapper.appendChild(clone);
                            container.appendChild(wrapper);
                        },
                    });
                },
            })
        })
    }, [boardToShow?.groups])

    useEffect(() => {
        if (!boardToShow?.groups) return

        boardToShow.groups.forEach((group) => {
            const ref = groupRefs.current[group.id]
            if (!ref?.current) return
            const el = ref.current

            dropTargetForElements({
                element: el,
                canDrop({ source }) {
                    return isGroupData(source.data)
                },
                getIsSticky: () => true, // Add this line
                getData({ element, input }) {
                    return attachClosestEdge(
                        { groupId: group.id },
                        {
                            element,
                            input,
                            allowedEdges: ["right", "left"],
                        }
                    )
                },
                onDragEnter({ source, self }) {
                    if (!isGroupData(source.data)) return
                    const { group: draggedGroup, rect: draggedRect } = source.data
                    if (draggedGroup.id === group.id) return

                    const edge = extractClosestEdge(self.data)
                    setShadowGroup({
                        groupId: group.id,
                        edge,
                        // width: 272, // draggedRect.width,
                        width: draggedRect.width,
                        height: draggedRect.height,
                    })
                },
                onDrag({ source, self }) {
                    if (!isGroupData(source.data)) return
                    const { group: draggedGroup, rect: draggedRect } = source.data
                    if (draggedGroup.id === group.id) return

                    const edge = extractClosestEdge(self.data)
                    setShadowGroup({
                        groupId: group.id,
                        edge,
                        // width: 272, // draggedRect.width,
                        width: draggedRect.width,
                        height: draggedRect.height,
                    })
                },
                onDragLeave() {
                    setShadowGroup(null)
                },
                onDrop({ source, self }) {
                    setShadowGroup(null)
                    if (!isGroupData(source.data)) return
                    const { group: draggedGroup } = source.data
                    if (draggedGroup.id === group.id) return

                    const edge = extractClosestEdge(self.data)
                    reorderGroups(draggedGroup.id, self.data.groupId, edge)
                },
            })
        })
    }, [boardToShow?.groups])

    function reorderGroups(draggedId, targetId, edge) {
        const boardCopy = JSON.parse(JSON.stringify(boardToShow))
        const fromIndex = boardCopy.groups.findIndex((g) => g.id === draggedId)
        const toIndex = boardCopy.groups.findIndex((g) => g.id === targetId)
        if (fromIndex < 0 || toIndex < 0) return

        const reordered = reorderWithEdge({
            list: boardCopy.groups,
            startIndex: fromIndex,
            indexOfTarget: toIndex,
            closestEdgeOfTarget: edge,
            axis: "horizontal",
        })

        boardCopy.groups = reordered
        updateBoard(boardCopy)
    }


    return (
        <section id="group-lists" className="group-lists" 
            ref={containerRef}>
            {boardToShow?.groups?.map((group) => {
                if (group.isMinimaized) {

                    return (
                        <React.Fragment key={group.id}>
                            {shadowGroup?.groupId === group.id && shadowGroup.edge === "left" && (
                                <div
                                    className="group-placeholder list"
                                    style={{
                                        // display: "block",
                                        width: shadowGroup.width + "px",
                                        height: shadowGroup.height + "px",
                                        marginRight: "12px",
                                        borderRadius: "6px",
                                        backgroundColor: "rgba(0,0,0,0.2)",
                                        // border: "2px dashed rgba(0, 0, 0, 0.3)",
                                        // transition: "all 0.15s ease",
                                    }}
                                />
                            )}
                            <MinimaizedGRoup
                                ref={getGroupRef(group.id)}
                                getGroupRef={getGroupRef}
                                key={group.id}
                                style={{
                                    backgroundColor: group.style?.backgroundColor || "",
                                    color: group.style?.color || "#172b4d",
                                }}
                                group={group}
                            />
                            {shadowGroup?.groupId === group.id && shadowGroup.edge === "right" && (
                                <div
                                    className="group-placeholder list"
                                    style={{
                                        // display: "block",
                                        width: shadowGroup.width + "px",
                                        height: shadowGroup.height + "px",
                                        marginRight: "12px",
                                        borderRadius: "6px",
                                        backgroundColor: "rgba(0,0,0,0.2)",
                                        // border: "2px dashed rgba(0, 0, 0, 0.3)",
                                        // transition: "all 0.15s ease",
                                    }}
                                />
                            )}
                        </React.Fragment>)

                }

                return (
                    <React.Fragment key={group.id}>
                        {shadowGroup?.groupId === group.id && shadowGroup.edge === "left" && (
                            <div
                                className="group-placeholder list"
                                style={{
                                    // display: "block",
                                    width: shadowGroup.width + "px",
                                    height: shadowGroup.height + "px",
                                    marginRight: "12px",
                                    borderRadius: "6px",
                                    backgroundColor: "rgba(0,0,0,0.2)",
                                    // border: "2px dashed rgba(0, 0, 0, 0.3)",
                                    // transition: "all 0.15s ease",
                                }}
                            />
                        )}

                        <div
                            ref={getGroupRef(group.id)}
                            className="list base-components-list"
                            style={{
                                // display: "block",
                                backgroundColor: group.style?.backgroundColor || "",
                                color: group.style?.color || "#172b4d",
                                // marginRight: "12px",
                            }}
                        >
                            <GroupHeader setGroup={setGroup} setHeader={setHeader} onSetGroupEdit={onSetGroupEdit} group={group} />
                            <TaskList grp={grp}
                                onsetQuickEdit={onsetQuickEdit}
                                showQuickEdit={showQuickEdit}
                                onSetPlaceholderHeight={onSetPlaceholderHeight}
                                Placeholder={Placeholder}
                                placeholderHeight={placeholderHeight}
                                toggleLargeLabels={toggleLargeLabels}
                                largeLabels={largeLabels}
                                currentBoard={boardToShow}
                                currentGroup={group}
                                onLoadTask={onLoadTask}
                                group={group}
                                onMoveCard={onMoveCard}
                                onReorderCard={onReorderCard}
                            />
                        </div>

                        {shadowGroup?.groupId === group.id && shadowGroup.edge === "right" && (
                            <div
                                className="group-placeholder list" // list base-components-list
                                style={{
                                    // display: "block",
                                    width: shadowGroup.width + "px",
                                    height: shadowGroup.height + "px",
                                    marginRight: "12px",
                                    borderRadius: "6px",
                                    backgroundColor: "rgba(0,0,0,0.2)",
                                    // border: "2px dashed rgba(0, 0, 0, 0.3)",
                                    // transition: "all 0.15s ease",
                                }}
                            />
                        )}
                    </React.Fragment>
                )
            })}
            {showGroupEdit && grp && <GroupEdit onSetSort={onSetSort} onSetMoveAll={onSetMoveAll} onSetMoveList={onSetMoveList} onSetCopyList={onSetCopyList} group={grp} onSetGroupEdit={onSetGroupEdit} header={header} />}
            {showCopyList && <CopyListForm group={grp} onSetCopyList={onSetCopyList} onSetGroupEdit={onSetGroupEdit} header={header} />}
            {showMoveList && <MoveListForm onSetMoveList={onSetMoveList} onSetGroupEdit={onSetGroupEdit} group={grp} header={header} />}
            {showMoveAll && <MoveAll onSetMoveAll={onSetMoveAll} group={grp} header={header} onSetGroupEdit={onSetGroupEdit} />}
            {showSort && <GroupSort header={header} onSetGroupEdit={onSetGroupEdit} onSetSort={onSetSort} group={grp} />}
            <AddGroup useDarkTextColors={useDarkTextColors} />
            {/*<AddGPTGroup useDarkTextColors={useDarkTextColors} />*/}

        </section>
    )
}
