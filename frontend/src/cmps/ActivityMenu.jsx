import { useSelector } from "react-redux"
import { getForamtedDate } from "../services/util.service"





export function ActivityMenu({onSetActivityMenu}) {


      const board = useSelector(state => state.boardModule.board)

    return (
        <div className="activitymenu">
            <div className="header">
                <button onClick={onSetActivityMenu}><svg  width="20" height="20" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.29289 11.2929L14.364 4.22185C14.7545 3.83132 15.3876 3.83132 15.7782 4.22185C16.1687 4.61237 16.1687 5.24554 15.7782 5.63606L9.41421 12L15.7782 18.364C16.1687 18.7545 16.1687 19.3877 15.7782 19.7782C15.3877 20.1687 14.7545 20.1687 14.364 19.7782L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929Z" fill="currentColor"></path></svg></button>
                <span className="title">Activity</span>
               <button onClick={onSetActivityMenu}><svg  width="20" height="20" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor"></path></svg></button> 
            </div>
            <section className="activities">
                {board.activities.map(activity =>{
                    return (
                        <div className="activity">
                            <img src={activity.byMember.imgUrl|| "user-defult-img.png"} alt="" />
                            <div>
                            <span className="name">{activity.byMember.fullname} added </span>
                            {(activity.task)&&<span className="task"><span className="tsk"> {activity.task.title} </span> to </span>}
                            <span className="act">{activity.group.title}</span>
                            <div className="date">{getForamtedDate(activity.createdAt)}</div>
                            </div>
                        </div>
                    )
                })}

            </section>
        </div>
    )
}