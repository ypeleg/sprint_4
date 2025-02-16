import { useState } from "react"
import { useSelector } from "react-redux"
import { GroupHeader } from "./GroupHeader"
import { TaskList } from "./TaskList"
import { AddGroup } from "./AddGroup"



export function GroupList({onLoadTask,onMoveCard}){
     const boardToShow = useSelector(state => state.boardModule.board)
     const [largeLabels, setLargeLabels] = useState(false)
    
        function toggleLargeLabels(ev) {
            ev.stopPropagation()
            setLargeLabels(!largeLabels)
        }
    return(
        <section className="group-lists">
                                {boardToShow.groups.map(group => {
        
                                    // return <GroupPreview currentBoard={boardToShow} onLoadTask={onLoadTask} group={group}/>
                                    return <div className="list base-components-list" style={{backgroundColor: (group.style?.backgroundColor || ''), color: (group.style?.color || '#172b4d')}}>
                                    <GroupHeader group={group}/>
                                        <TaskList toggleLargeLabels={toggleLargeLabels} largeLabels={largeLabels} currentBoard={boardToShow} currentGroup={group} onLoadTask={onLoadTask} group={group}
                                                  onMoveCard={onMoveCard}/>
        
        
                                    </div>
        
        
                                })}
                                <AddGroup/>
                            </section>
    )
}