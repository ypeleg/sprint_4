

import { AddGroup } from "./AddGroup";
import { GroupPreview } from "./GroupPreview";
import { ListFooter } from "./ListFooter";
import { TaskList } from "./TaskList";


export function GroupList({ currentBoard, onLoadTask, groups }) {

    if (!groups.length) return (<>Loading..</>)
    return (
        <section className="group-lists">
            {groups.map(group => {
            
            return  <GroupPreview currentBoard = {currentBoard} onLoadTask={onLoadTask} group={group}/>

            })}
            <AddGroup/>
        </section>

    )
}