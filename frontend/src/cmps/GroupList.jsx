

import { AddGroup } from "./AddGroup";
import { GroupPreview } from "./GroupPreview";


export function GroupList({ currentBoard, onLoadTask, groups }) {

    return (
        <section className="group-lists">
            {groups.map(group => {
            
            return  <GroupPreview currentBoard = {currentBoard} onLoadTask={onLoadTask} group={group}/>

            })}
            <AddGroup/>
        </section>

    )
}