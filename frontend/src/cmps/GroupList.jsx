

import { TaskList } from "./TaskList";


export function GroupList({ groups }) {

    if (!groups.length) return (<>Loading..</>)
    return (
        <section className="group-lists">
            {groups.map(group => {
                return <div className="list base-components-list"
                    style={{ backgroundColor: group.style?.backgroundColor || '' }}
                >
                    <div className="list-header just-flex">
                        <span>In Progress</span>
                        <div className="group-list-headr-btns">
                            <i className="fa-regular fa-arrows-h"></i>
                            <i className="fa-regular fa-ellipsis-h"></i>
                        </div>
                    </div>

                    <TaskList tasks={group.tasks} />

                    <div className="group-list-footer">
                        <button className="add-card-btn"><i className="fa-regular fa-plus"></i> Add a card</button>
                        <button className="create-from-template-btn"><i className="fa-regular fa-vector-square"></i></button>
                    </div>
                </div>

            })}

        </section>

    )
}