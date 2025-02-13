

import { AddGroup } from "./AddGroup";
import { GroupPreview } from "./GroupPreview";
import { ListFooter } from "./ListFooter";
import { TaskList } from "./TaskList";


export function GroupList({ groups }) {

    if (!groups.length) return (<>Loading..</>)
    return (
        <section className="group-lists">
            {groups.map(group => {
            
            return    <GroupPreview group={group}/>

            })}
            <AddGroup/>
        </section>

    )
}