import { useSelector } from "react-redux"



export function GroupTable() {

    const boardToShow = useSelector(state => state.boardModule.board)

    return (<>

        <table className="group-table">
            <thead>
                <tr className="first-row">
                    <th>Card</th>
                    <th>List</th>
                    <th>Labels</th>
                    <th>Members</th>
                    <th>Due date</th>
                </tr>
            </thead>
            
            <tbody>
            {boardToShow.groups.map(group => group.tasks.map(task => {
                return (
                    <tr key={group.id} className="board-table">
                        <td className="col-1">
                            <div className="status-indicator">
                            {(task.status ==='done')&&<svg width='16px' height='16px' fill="none" viewBox="0 0 16 16" role="presentation" className="css-1t4wpzr"><path fill="currentcolor" fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m12.326-2.52-1.152-.96L6.75 9.828 4.826 7.52l-1.152.96 2.5 3a.75.75 0 0 0 1.152 0z" clipRule="evenodd"></path></svg>}
                            {!(task.status ==='done')&&<div className="task-checkbox-table"></div>}
                            </div>
                            <span className="span-task-title">{task.title}</span>
                        </td>
                        <td className="col-2-group-title">{group.title}</td>
                        
                        <td className="col-3-labels">
                        <div className="labels labels-table">
                                {task.labels.map((label) => (
                                    <div
                                        key={label.id}
                                        className="task-label tooltip task-label"
                                        
                                        style={{ backgroundColor: label.color || "" }}
                                        data-tip={label.title}
                                    ></div>
                                ))}
                            </div>
                            {/* {task.labels.map((label) => { */}

                            
                            {/* // return <pre>{JSON.stringify(label    , null, 4)}</pre> */}

                            {/* })} */}
                            {/* Labels */}
                            
                            </td>
                        <td className="col-4-members">
                            <div className="task-users">
                                {task.members?.length > 0 && (
                                    <div key={task.id} className="task-user-icons task-user-icon">
                                        {task.members.map((member) => {
                                            if (member?.imgUrl) {
                                                return (
                                                    <div
                                                        className="user-circle task-user-icon"
                                                        key={member.id}
                                                        style={{ backgroundImage: `url(${member.imgUrl})` }}
                                                    ></div>
                                                )
                                            } else {
                                                const initials = member?.fullname?.split(" ")
                                                return (
                                                    <div key={member.id} className="member-circle task-user-icon" title="LH">
                                                        {initials?.[0]?.[0].toUpperCase() || ""}
                                                        {initials?.[1]?.[0].toUpperCase() || ""}
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                )}
                            </div>
                        </td>
                        <td className="col-5-due-date">
                            
                            {task.dueDate && (
                                    <div className="task-date tooltip" data-tip="Due date">
                                        <i className="fa-regular fa-clock"></i> {new Date(task.dueDate).toLocaleDateString()}
                                    </div>
                            )}
                            {!task.dueDate && (
                                <div className="task-date tooltip" data-tip="Due date">
                                    .
                                </div>
                                )}

                            </td>
                    </tr>
                )
            })

            )}
            
            </tbody>
        </table>
    </>)
}

