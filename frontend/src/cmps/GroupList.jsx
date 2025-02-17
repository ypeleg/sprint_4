

import {useState} from "react"
import {TaskList} from "./TaskList"
import {AddGroup} from "./AddGroup"
import {useSelector} from "react-redux"
import {GroupHeader} from "./GroupHeader"
import { MinimaizedGRoup } from "./MinimaizedGroup"


export function GroupList({onLoadTask, onMoveCard, onReorderCard, Placeholder, onSetPlaceholderHeight, placeholderHeight, onsetQuickEdit, showQuickEdit}) {
    const boardToShow = useSelector(state => state.boardModule.board)
    const [largeLabels, setLargeLabels] = useState(false)

    function toggleLargeLabels(ev) {
        ev.stopPropagation()
        setLargeLabels(!largeLabels)
    }

    return (
        <section className="group-lists">
            {boardToShow.groups.map(group => {
               return  ((group.isMinimaized)? <MinimaizedGRoup style={{backgroundColor: (group.style?.backgroundColor || ''), color: (group.style?.color || '#172b4d')}} group={group}/>:
                // return <GroupPreview currentBoard={boardToShow} onLoadTask={onLoadTask} group={group}/>
                 <div className="list base-components-list" style={{backgroundColor: (group.style?.backgroundColor || ''), color: (group.style?.color || '#172b4d')}}>
                    <GroupHeader group={group}/>
                    <TaskList
                        onsetQuickEdit={onsetQuickEdit} showQuickEdit={showQuickEdit}
                        onSetPlaceholderHeight={onSetPlaceholderHeight} Placeholder={Placeholder} placeholderHeight={placeholderHeight}
                        toggleLargeLabels={toggleLargeLabels} largeLabels={largeLabels} currentBoard={boardToShow} currentGroup={group} onLoadTask={onLoadTask} group={group}
                        onMoveCard={onMoveCard} onReorderCard={onReorderCard}/>

                        
                </div>)


            })}
            <AddGroup/>
        </section>
    )
}