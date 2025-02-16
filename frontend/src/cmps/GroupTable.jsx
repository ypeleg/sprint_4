import { useSelector } from "react-redux"



export function GroupTable() {

    const boardToShow = useSelector(state => state.boardModule.board)

    return (
        <table className="group-table">
            <thead>
                <tr>
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
                    <tr>
                        <td>{(task.status ==='done')&&<svg width='16px' height='16px' fill="none" viewBox="0 0 16 16" role="presentation" class="css-1t4wpzr"><path fill="currentcolor" fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m12.326-2.52-1.152-.96L6.75 9.828 4.826 7.52l-1.152.96 2.5 3a.75.75 0 0 0 1.152 0z" clip-rule="evenodd"></path></svg>}
                        <span>{task.title}</span></td>
                        <td>{group.title}</td>
                        <td>Labels</td>
                        <td>Members</td>
                        <td>{task.dueDate}</td>
                    </tr>
                )
            })

            )}
            </tbody>
        </table>
    )
}