import { useSelector } from "react-redux"
import { getForamtedDate, utilService } from "../services/util.service"
import { useState } from "react"
import { updateBoard } from "../store/store";



const imageUrls = [
    "https://images.unsplash.com/photo-1734832360218-09cb0e158021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNzM5OTg3OTA1fA&ixlib=rb-4.0.3&q=80&w=1000",
    "https://images.unsplash.com/photo-1738300332814-225c81707b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDJ8MzE3MDk5fHx8fHwyfHwxNzM5OTg3OTA1fA&ixlib=rb-4.0.3&q=80&w=1000",
    "https://images.unsplash.com/photo-1739614621579-8f8f396c7412?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDN8MzE3MDk5fHx8fHwyfHwxNzM5OTg3OTA1fA&ixlib=rb-4.0.3&q=80&w=1000",
    "https://images.unsplash.com/photo-1739643247007-044e2623ca98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDR8MzE3MDk5fHx8fHwyfHwxNzM5OTg3OTA1fA&ixlib=rb-4.0.3&q=80&w=1000",
    "https://images.unsplash.com/photo-1736332654737-1224ed263915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDV8MzE3MDk5fHx8fHwyfHwxNzM5OTg3OTA1fA&ixlib=rb-4.0.3&q=80&w=1000",
    "https://images.unsplash.com/photo-1739761613270-a48d0d1190ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDZ8MzE3MDk5fHx8fHwyfHwxNzM5OTg3OTA1fA&ixlib=rb-4.0.3&q=80&w=1000",
    "https://images.unsplash.com/photo-1739733901481-2c0074e33ede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDd8MzE3MDk5fHx8fHwyfHwxNzM5OTg3OTA1fA&ixlib=rb-4.0.3&q=80&w=1000",
    "https://images.unsplash.com/photo-1739639845916-6bfcaec516ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDh8MzE3MDk5fHx8fHwyfHwxNzM5OTg3OTA1fA&ixlib=rb-4.0.3&q=80&w=1000",
    "https://images.unsplash.com/photo-1738249034650-6a789a081a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDl8MzE3MDk5fHx8fHwyfHwxNzM5OTg3OTA1fA&ixlib=rb-4.0.3&q=80&w=1000",
    "https://images.unsplash.com/photo-1735124283566-5f5707a40808?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDEwfDMxNzA5OXx8fHx8Mnx8MTczOTk4NzkwNXw&ixlib=rb-4.0.3&q=80&w=1000",
    "https://images.unsplash.com/photo-1738430275589-2cd3d0d0d57a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDExfDMxNzA5OXx8fHx8Mnx8MTczOTk4NzkwNXw&ixlib=rb-4.0.3&q=80&w=1000",
    "https://images.unsplash.com/photo-1738028449238-fa5ae8c33bce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDE0fDMxNzA5OXx8fHx8Mnx8MTczOTk4NzkwNXw&ixlib=rb-4.0.3&q=80&w=1000",
    "https://images.unsplash.com/photo-1738193450396-31b212c006f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDE2fDMxNzA5OXx8fHx8Mnx8MTczOTk4NzkwNXw&ixlib=rb-4.0.3&q=80&w=1000",
    "https://images.unsplash.com/photo-1737610662779-69ac9f666e70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDE3fDMxNzA5OXx8fHx8Mnx8MTczOTk4NzkwNXw&ixlib=rb-4.0.3&q=80&w=1000",
    "https://images.unsplash.com/photo-1737587653765-94bc8fe7b541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDE4fDMxNzA5OXx8fHx8Mnx8MTczOTk4NzkwNXw&ixlib=rb-4.0.3&q=80&w=1000",
    "https://images.unsplash.com/photo-1737535614450-ce142f8e2953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDE5fDMxNzA5OXx8fHx8Mnx8MTczOTk4NzkwNXw&ixlib=rb-4.0.3&q=80&w=1000",
    "https://images.unsplash.com/photo-1736969826083-7bfb095ef213?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDI0fDMxNzA5OXx8fHx8Mnx8MTczOTk4NzkwNXw&ixlib=rb-4.0.3&q=80&w=1000",
    "https://images.unsplash.com/photo-1736855719599-c0298b8faf95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDI2fDMxNzA5OXx8fHx8Mnx8MTczOTk4NzkwNXw&ixlib=rb-4.0.3&q=80&w=1000",
    "https://images.unsplash.com/photo-1735527919007-3ba8d909049e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDI4fDMxNzA5OXx8fHx8Mnx8MTczOTk4NzkwNXw&ixlib=rb-4.0.3&q=80&w=1000"
];
const colors = [
    "https://trello.com/assets/13425f9db06517de0f7f.svg",
    "https://trello.com/assets/707f35bc691220846678.svg",
    "https://trello.com/assets/d106776cb297f000b1f4.svg",
    "https://trello.com/assets/8ab3b35f3a786bb6cdac.svg",
    "https://trello.com/assets/a7c521b94eb153008f2d.svg"
  ]

export function ActivityMenu({ onSetActivityMenu }) {


    const board = useSelector(state => state.boardModule.board)
    const [mode, setMode] = useState('main')

  function changeBoardBackGround(idx){
    if(mode === 'backgroundimages' ){

        board.style.backgroundImage = imageUrls[idx]
    }else{
        board.style.backgroundImage = colors[idx]
    }

    updateBoard(board)
  }

    return (
        <div className="activitymenu">
            <Dynmic changeBoardBackGround={changeBoardBackGround} mode={mode} board={board} onSetActivityMenu={onSetActivityMenu} setMode={setMode} />
           
        </div>
    )
}

function Activity({ board, onSetActivityMenu, setMode }) {
    return (<>
        <div className="header">
            <button onClick={() => setMode('main')}><svg width="20" height="20" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.29289 11.2929L14.364 4.22185C14.7545 3.83132 15.3876 3.83132 15.7782 4.22185C16.1687 4.61237 16.1687 5.24554 15.7782 5.63606L9.41421 12L15.7782 18.364C16.1687 18.7545 16.1687 19.3877 15.7782 19.7782C15.3877 20.1687 14.7545 20.1687 14.364 19.7782L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929Z" fill="currentColor"></path></svg></button>
            <span className="title">Activity</span>
            <button onClick={onSetActivityMenu}><svg width="20" height="20" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor"></path></svg></button>
        </div>
        <section className="activities">
            {board.activities.map(activity => {
                return (
                    <div className="activity">
                        <img src={activity.byMember.imgUrl || "user-defult-img.png"} alt="" />
                        <div>
                            <span className="name">{activity.byMember.fullname} added </span>
                            {(activity.task) && <span className="task"><span className="tsk"> {activity.task.title} </span> to </span>}
                            <span className="act">{activity.group.title}</span>
                            <div className="date">{getForamtedDate(activity.createdAt)}</div>
                        </div>
                    </div>
                )
            })}

        </section>
    </>)
}



function MainMenu({ board, onSetActivityMenu, setMode }) {
    return (<>

        <div className="header main ">

            <span className="title">Menu</span>
            <button onClick={onSetActivityMenu}><svg width="20" height="20" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor"></path></svg></button>
        </div>
        <section className="activities mainmenu">
            <button><svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"></path><path d="M11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V11Z" fill="currentColor"></path><path d="M13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8Z" fill="currentColor"></path></svg><div><span className="about">about this board</span><span className="subabout">Add description to your board</span></div></button>
            <button onClick={() => { setMode('activity') }}><svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5C2.8955 5 2 5.89543 2 7C2 8.1045 2.89543 9 4 9C5.1045 9 6 8.10457 6 7C6 5.8955 5.10457 5 4 5Z" fill="currentColor"></path><path d="M4 13C2.8955 13 2 13.8954 2 15C2 16.1045 2.89543 17 4 17C5.1045 17 6 16.1046 6 15C6 13.8955 5.10457 13 4 13Z" fill="currentColor"></path><path d="M8 6C8 5.44772 8.44772 5 9 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H9C8.44772 7 8 6.55228 8 6Z" fill="currentColor"></path><path d="M9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44771 11 9 11H18C18.5523 11 19 10.5523 19 10C19 9.44772 18.5523 9 18 9H9Z" fill="currentColor"></path><path d="M8 14C8 13.4477 8.44772 13 9 13H21C21.5523 13 22 13.4477 22 14C22 14.5523 21.5523 15 21 15H9C8.44772 15 8 14.5523 8 14Z" fill="currentColor"></path><path d="M9 17C8.44772 17 8 17.4477 8 18C8 18.5523 8.44771 19 9 19H18C18.5523 19 19 18.5523 19 18C19 17.4477 18.5523 17 18 17H9Z" fill="currentColor"></path></svg><span>Activity</span></button>
            <button><svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3.03418 5.59621C2.98604 5.04603 3.39303 4.56099 3.94322 4.51286L19.8823 3.11837C20.4325 3.07023 20.9175 3.47722 20.9657 4.02741L21.0528 5.0236L3.12133 6.5924L3.03418 5.59621Z" fill="currentColor"></path><path d="M9 12.9999C9 12.4476 9.44772 11.9999 10 11.9999H14C14.5523 11.9999 15 12.4476 15 12.9999C15 13.5522 14.5523 13.9999 14 13.9999H10C9.44772 13.9999 9 13.5522 9 12.9999Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3 18.9999V7.99993H21V18.9999C21 20.1045 20.1046 20.9999 19 20.9999H5C3.89543 20.9999 3 20.1045 3 18.9999ZM5 9.99993H19V18.9999H5L5 9.99993Z" fill="currentColor"></path></svg><span>Archived items</span></button>
            <div className="hr"></div>
            <button><svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0017 17.0009C9.23868 17.0009 6.99968 14.7609 6.99968 11.9989C6.99968 9.23586 9.23868 6.99686 12.0017 6.99686C14.7647 6.99686 17.0037 9.23586 17.0037 11.9989C17.0037 14.7609 14.7647 17.0009 12.0017 17.0009ZM20.3697 13.8839C19.5867 13.6119 19.0237 12.8749 19.0237 11.9989C19.0237 11.1229 19.5867 10.3859 20.3687 10.1139C20.6057 10.0319 20.7517 9.78086 20.6837 9.53986C20.4847 8.83586 20.2017 8.16886 19.8477 7.54686C19.7297 7.33886 19.4707 7.26186 19.2497 7.35186C18.8647 7.50986 18.4197 7.55086 17.9587 7.43286C17.2847 7.25886 16.7337 6.70986 16.5557 6.03686C16.4337 5.57386 16.4747 5.12686 16.6317 4.73986C16.7207 4.51986 16.6437 4.26086 16.4357 4.14286C15.8187 3.79386 15.1567 3.51386 14.4607 3.31686C14.2187 3.24886 13.9687 3.39386 13.8867 3.63086C13.6147 4.41386 12.8777 4.97686 12.0017 4.97686C11.1267 4.97686 10.3887 4.41386 10.1177 3.63186C10.0347 3.39486 9.78368 3.24886 9.54268 3.31686C8.83468 3.51686 8.16368 3.80186 7.53868 4.15886C7.33768 4.27386 7.25268 4.52586 7.34068 4.74086C7.48768 5.10186 7.53268 5.51386 7.43868 5.94386C7.28368 6.64986 6.72468 7.24086 6.02568 7.42786C5.56768 7.55086 5.12768 7.51186 4.74568 7.35986C4.52568 7.27186 4.26768 7.34986 4.15068 7.55586C3.79768 8.17786 3.51568 8.84586 3.31768 9.54986C3.24968 9.78886 3.39268 10.0369 3.62568 10.1219C4.39668 10.3999 4.94868 11.1319 4.94868 11.9989C4.94868 12.8659 4.39668 13.5979 3.62468 13.8759C3.39168 13.9599 3.24968 14.2079 3.31668 14.4469C3.49368 15.0739 3.73868 15.6729 4.03968 16.2369C4.15868 16.4589 4.43468 16.5349 4.66368 16.4299C5.25868 16.1569 6.00668 16.1659 6.76768 16.6679C6.88468 16.7449 6.99268 16.8529 7.06968 16.9689C7.59668 17.7679 7.58168 18.5489 7.26768 19.1559C7.15268 19.3789 7.21968 19.6569 7.43568 19.7839C8.08968 20.1679 8.79768 20.4709 9.54468 20.6809C9.78568 20.7489 10.0337 20.6049 10.1147 20.3679C10.3837 19.5819 11.1237 19.0149 12.0017 19.0149C12.8797 19.0149 13.6197 19.5819 13.8887 20.3679C13.9697 20.6039 14.2177 20.7489 14.4587 20.6809C15.1957 20.4739 15.8947 20.1749 16.5427 19.7979C16.7607 19.6709 16.8267 19.3899 16.7097 19.1669C16.3917 18.5589 16.3727 17.7739 16.9007 16.9719C16.9777 16.8559 17.0857 16.7469 17.2027 16.6699C17.9747 16.1589 18.7297 16.1569 19.3277 16.4399C19.5567 16.5479 19.8357 16.4729 19.9557 16.2499C20.2597 15.6859 20.5047 15.0859 20.6837 14.4569C20.7517 14.2159 20.6067 13.9659 20.3697 13.8839Z" fill="currentColor"></path></svg><span>Settings</span></button>
            <button onClick={() => { setMode('ChnageBackGroud') }}><img src={board.style.backgroundImage} alt="" />Change background</button>
            <button><svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C2.44772 6 2 6.44772 2 7C2 7.55228 2.44772 8 3 8H11C11.5523 8 12 7.55228 12 7C12 6.44772 11.5523 6 11 6H3ZM4 16V12H20V16H4ZM2 12C2 10.8954 2.89543 10 4 10H20C21.1046 10 22 10.8954 22 12V16C22 17.1046 21.1046 18 20 18H4C2.89543 18 2 17.1046 2 16V12Z" fill="currentColor"></path></svg><span>Custom Feilds</span></button>
            <button><svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 3C13 3.55228 12.5523 4 12 4C11.4477 4 11 3.55228 11 3C11 2.44772 11.4477 2 12 2C12.5523 2 13 2.44772 13 3ZM4 7H20V17H4V7ZM2 7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17V7ZM8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9V11C10 11.5523 9.55228 12 9 12C8.44772 12 8 11.5523 8 11V9ZM14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9V11C16 11.5523 15.5523 12 15 12C14.4477 12 14 11.5523 14 11V9ZM12 16C12.5523 16 13 15.5523 13 15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15C11 15.5523 11.4477 16 12 16Z" fill="currentColor"></path></svg><span>Automation</span></button>
            <button><svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5009 2.65511C18.4967 2.5456 19.5352 2.80718 20.364 3.63597L18.9498 5.05019C18.6192 4.71958 18.2151 4.58335 17.7106 4.63884C17.1593 4.69947 16.4959 4.96246 15.7486 5.38541C15.0122 5.80221 14.272 6.32856 13.5675 6.8454C13.4614 6.92326 13.3548 7.00186 13.2485 7.08031C12.6795 7.50008 12.1166 7.91532 11.6552 8.18878C11.1608 8.48182 10.6363 8.46971 10.3204 8.43815C9.98837 8.40498 9.19934 8.39748 7.94353 8.81849C7.16614 9.07911 6.21617 9.69953 5.40597 10.3177L5.34387 10.3653C5.59079 10.4171 5.85122 10.4646 6.11263 10.5076C6.62099 10.5913 7.11123 10.6543 7.47593 10.6964C7.65774 10.7174 7.80708 10.7331 7.9103 10.7434C7.96189 10.7486 8.00189 10.7525 8.02858 10.755L8.0584 10.7578L8.06686 10.7585L8.96578 11.8603L8.96537 11.8658L8.96296 11.8884C8.96079 11.909 8.95758 11.9404 8.95366 11.9813C8.9458 12.0632 8.93516 12.1826 8.92441 12.3287C8.9028 12.6224 8.88136 13.0163 8.88048 13.4263C8.87958 13.8425 8.90011 14.2437 8.95265 14.563C8.9897 14.7881 9.03099 14.8963 9.04531 14.9338C9.04927 14.9442 9.05033 14.9497 9.05033 14.9497C9.05033 14.9497 9.05582 14.9507 9.06621 14.9547C9.10371 14.969 9.2119 15.0103 9.43702 15.0474C9.75627 15.0999 10.1575 15.1204 10.5737 15.1195C10.9837 15.1186 11.3777 15.0972 11.6714 15.0756L12.1391 15.0341L13.2414 15.933L13.3036 16.5241C13.3457 16.8888 13.4087 17.379 13.4924 17.8874C13.5354 18.1488 13.583 18.4092 13.6347 18.6561L13.6823 18.594C14.3005 17.7838 14.9209 16.8339 15.1815 16.0565C15.6025 14.8007 15.595 14.0116 15.5619 13.6796C15.5303 13.3637 15.5182 12.8392 15.8112 12.3448C16.0847 11.8834 16.4999 11.3206 16.9197 10.7515C16.9981 10.6452 17.0767 10.5386 17.1546 10.4325C17.6715 9.72798 18.1978 8.98784 18.6146 8.25143C19.0376 7.50416 19.3005 6.84067 19.3612 6.28939C19.4167 5.78487 19.2804 5.38079 18.9498 5.05019L20.364 3.63597C21.1928 4.46477 21.4544 5.50334 21.3449 6.4991C21.2405 7.4481 20.8244 8.39124 20.3504 9.22877C19.8702 10.0772 19.2817 10.9 18.762 11.6084C18.674 11.7284 18.5889 11.8439 18.5069 11.9552C18.0946 12.5148 17.7615 12.9669 17.5439 13.3284C17.5413 13.3535 17.5403 13.3991 17.5477 13.4727C17.6103 14.0997 17.58 15.1726 17.0735 16.6835C16.7017 17.7925 15.9064 18.9623 15.2669 19.8003C14.9374 20.2322 14.6293 20.6014 14.4034 20.8629C14.2902 20.9939 14.1971 21.0986 14.1314 21.1714C14.0985 21.2078 14.0725 21.2363 14.0543 21.2561L14.0267 21.286L14.0239 21.289C13.8388 21.4871 13.5813 21.6021 13.3108 21.6073C13.0403 21.6124 12.7798 21.5076 12.5889 21.3167C12.3731 21.1009 12.2313 20.8327 12.1361 20.6177C12.0339 20.3868 11.9481 20.1296 11.8751 19.8725C11.729 19.3576 11.6128 18.7648 11.5231 18.2197C11.4566 17.8154 11.4027 17.425 11.3611 17.0937C11.1199 17.1058 10.8496 17.1146 10.5694 17.1152C10.1037 17.1162 9.57892 17.0947 9.10468 17.0166C8.69213 16.9487 8.05261 16.7804 7.63611 16.3639C7.21962 15.9474 7.05129 15.3079 6.9834 14.8953C6.90535 14.4211 6.88378 13.8964 6.88478 13.4306C6.88539 13.1504 6.89426 12.8801 6.90635 12.6389C6.57502 12.5974 6.18466 12.5434 5.78029 12.4769C5.23522 12.3872 4.64237 12.271 4.12751 12.1249C3.8704 12.0519 3.61317 11.9661 3.38231 11.8639C3.16733 11.7687 2.89915 11.6269 2.68332 11.4111C2.49244 11.2202 2.38758 10.9597 2.39276 10.6892C2.39794 10.4187 2.51272 10.1614 2.71081 9.97631L2.71401 9.97332L2.72063 9.96718L2.74387 9.94573C2.76373 9.92748 2.79221 9.90147 2.82863 9.86862C2.90143 9.80296 3.00612 9.70979 3.13714 9.59661C3.39866 9.37069 3.76781 9.06262 4.19969 8.73309C5.03769 8.09367 6.20752 7.29836 7.31652 6.92656C8.8274 6.42004 9.90036 6.3897 10.5273 6.45233C10.6009 6.45968 10.6465 6.45871 10.6716 6.45614C11.0331 6.23853 11.4852 5.90543 12.0448 5.49314C12.1561 5.41114 12.2716 5.32601 12.3916 5.23804C13.1 4.71833 13.9228 4.12982 14.7712 3.64963C15.6088 3.1756 16.5519 2.75948 17.5009 2.65511Z" fill="currentColor"></path><path d="M15.4143 8.58572C15.8048 8.97624 16.438 8.97624 16.8285 8.58572C17.219 8.1952 17.219 7.56203 16.8285 7.17151C16.438 6.78098 15.8048 6.78098 15.4143 7.17151C15.0238 7.56203 15.0238 8.1952 15.4143 8.58572Z" fill="currentColor"></path></svg><span>Power-Ups</span></button>
            <button><svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.1213 2.80762C12.3403 2.02657 11.0739 2.02657 10.2929 2.80762L3.92891 9.17158C1.19524 11.9052 1.19524 16.3374 3.92891 19.0711C6.66258 21.8047 11.0947 21.8047 13.8284 19.0711L20.1924 12.7071C20.9734 11.9261 20.9734 10.6597 20.1924 9.87869L13.1213 2.80762ZM18.7782 11.2929L11.7071 4.22183L5.34313 10.5858C3.39051 12.5384 3.39051 15.7042 5.34313 17.6569C7.29575 19.6095 10.4616 19.6095 12.4142 17.6569L18.7782 11.2929ZM10 14C10 14.5523 9.55228 15 9 15C8.44772 15 8 14.5523 8 14C8 13.4477 8.44772 13 9 13C9.55228 13 10 13.4477 10 14ZM12 14C12 15.6569 10.6569 17 9 17C7.34315 17 6 15.6569 6 14C6 12.3431 7.34315 11 9 11C10.6569 11 12 12.3431 12 14Z" fill="currentColor"></path></svg>Labels<span></span></button>
            <button><svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9913 22C6.47244 21.9953 2 17.5199 2 12C2 6.47715 6.47715 2 12 2C17.5194 2 21.9944 6.47151 22 11.9896C22.0028 12.2553 21.8994 12.5149 21.7071 12.7071L12.7071 21.7071C12.5153 21.8989 12.2565 22.0023 11.9913 22ZM4 12C4 7.58172 7.58172 4 12 4C15.9888 4 19.2957 6.91917 19.901 10.7377C19.4642 10.6737 18.9449 10.625 18.375 10.625C16.7209 10.625 14.5466 11.0392 12.7929 12.7929C11.0392 14.5466 10.625 16.7209 10.625 18.375C10.625 18.9449 10.6737 19.4642 10.7377 19.901C6.91918 19.2957 4 15.9888 4 12ZM14.2071 14.2071C15.4534 12.9608 17.0292 12.625 18.375 12.625C18.5714 12.625 18.7609 12.6322 18.9412 12.6446L12.6446 18.9412C12.6322 18.7609 12.625 18.5714 12.625 18.375C12.625 17.0291 12.9608 15.4534 14.2071 14.2071Z" fill="currentColor"></path></svg><span>Stickers</span></button>
            <button><svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 3C3.89543 3 3 3.89543 3 5V7C3 7.55229 3.44772 8 4 8C4.55228 8 5 7.55229 5 7V5H7C7.55228 5 8 4.55229 8 4C8 3.44772 7.55228 3 7 3H5Z" fill="currentColor"></path><path d="M21 5C21 3.89543 20.1046 3 19 3H17C16.4477 3 16 3.44772 16 4C16 4.55228 16.4477 5 17 5H19V7C19 7.55228 19.4477 8 20 8C20.5523 8 21 7.55228 21 7V5Z" fill="currentColor"></path><path d="M5 21C3.89543 21 3 20.1046 3 19V17C3 16.4477 3.44772 16 4 16C4.55228 16 5 16.4477 5 17V19H7C7.55228 19 8 19.4477 8 20C8 20.5523 7.55228 21 7 21H5Z" fill="currentColor"></path><path d="M4 10C3.44772 10 3 10.4477 3 11V13C3 13.5523 3.44772 14 4 14C4.55228 14 5 13.5523 5 13V11C5 10.4477 4.55228 10 4 10Z" fill="currentColor"></path><path d="M11 5C10.4477 5 10 4.55228 10 4C10 3.44772 10.4477 3 11 3H13C13.5523 3 14 3.44772 14 4C14 4.55228 13.5523 5 13 5H11Z" fill="currentColor"></path><path d="M14 10C14 9.44771 14.4477 9 15 9C15.5523 9 16 9.44772 16 10V14H20C20.5523 14 21 14.4477 21 15C21 15.5523 20.5523 16 20 16H16V20C16 20.5523 15.5523 21 15 21C14.4477 21 14 20.5523 14 20V16H10C9.44771 16 9 15.5523 9 15C9 14.4477 9.44772 14 10 14H14V10Z" fill="currentColor"></path></svg><span>Make template</span></button>
        </section>


    </>)
}
function ChnageBackGroud({ board, onSetActivityMenu, setMode }) {

    return (<>
        <div className="header">
            <button onClick={() => setMode('main')}><svg width="20" height="20" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.29289 11.2929L14.364 4.22185C14.7545 3.83132 15.3876 3.83132 15.7782 4.22185C16.1687 4.61237 16.1687 5.24554 15.7782 5.63606L9.41421 12L15.7782 18.364C16.1687 18.7545 16.1687 19.3877 15.7782 19.7782C15.3877 20.1687 14.7545 20.1687 14.364 19.7782L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929Z" fill="currentColor"></path></svg></button>
            <span className="title">Change background</span>
            <button onClick={onSetActivityMenu}><svg width="20" height="20" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor"></path></svg></button>
        </div >

        <div className="backGroundoptions">
            <div onClick={() => {setMode('backgroundimages')}} className="photo border"><img src="https://trello.com/assets/8f9c1323c9c16601a9a4.jpg" alt="" /><span>Photos</span></div>
            <div onClick={() => {setMode('backgroundcolors')}} className="photo border"><img src="https://trello.com/assets/97db30fe74a58b7b7a18.png" alt="" /><span>Colors</span></div>
            <div className="addimagecontianire">
                <span className="custom">Custom</span>
                <div className="addimage">
                    <svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C11.4477 3 11 3.44772 11 4V11L4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11L13 11V4C13 3.44772 12.5523 3 12 3Z" fill="currentColor"></path></svg>
                    <input type="file" />
                </div>
            </div>
        </div>
    </>)

}

function BackgroundImages({changeBoardBackGround, board, onSetActivityMenu, setMode }) {
   
    
    return (<>
    <div className="header">
                <button onClick={() => setMode('main')}><svg width="20" height="20" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.29289 11.2929L14.364 4.22185C14.7545 3.83132 15.3876 3.83132 15.7782 4.22185C16.1687 4.61237 16.1687 5.24554 15.7782 5.63606L9.41421 12L15.7782 18.364C16.1687 18.7545 16.1687 19.3877 15.7782 19.7782C15.3877 20.1687 14.7545 20.1687 14.364 19.7782L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929Z" fill="currentColor"></path></svg></button>
                <span className="title">photos</span>
                <button onClick={onSetActivityMenu}><svg width="20" height="20" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor"></path></svg></button>
            </div >

            <div className="photooptions">
                
                    {imageUrls.map((url,index) =>{
                        return <div onClick={() => {changeBoardBackGround(index)}} key={index} className="photo "><img src={url} alt="" /></div> 

                    })}
            </div>
    </>)
}


function ColorBackgroundPicker({changeBoardBackGround,onSetActivityMenu,setMode}){
    
    return (<>
        <div className="header">
                    <button onClick={() => setMode('main')}><svg width="20" height="20" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.29289 11.2929L14.364 4.22185C14.7545 3.83132 15.3876 3.83132 15.7782 4.22185C16.1687 4.61237 16.1687 5.24554 15.7782 5.63606L9.41421 12L15.7782 18.364C16.1687 18.7545 16.1687 19.3877 15.7782 19.7782C15.3877 20.1687 14.7545 20.1687 14.364 19.7782L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929Z" fill="currentColor"></path></svg></button>
                    <span className="title">Colors</span>
                    <button onClick={onSetActivityMenu}><svg width="20" height="20" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor"></path></svg></button>
                </div >
    
                <div className="photooptions">
                    
                        {colors.map((url,index) =>{
                            return <div onClick={() => {changeBoardBackGround(index)}} key={index} className="photo "><img src={url} alt="" /></div> 
    
                        })}
                </div>
        </>)
}

function Dynmic({changeBoardBackGround, mode, board, onSetActivityMenu, setMode }) {


    switch (mode) {
        case 'activity':
            return <Activity board={board} setMode={setMode} onSetActivityMenu={onSetActivityMenu} />
        case 'ChnageBackGroud':
            return <ChnageBackGroud board={board} setMode={setMode} onSetActivityMenu={onSetActivityMenu} />
        case 'backgroundimages':
            return <BackgroundImages changeBoardBackGround={changeBoardBackGround} board={board} setMode={setMode} onSetActivityMenu={onSetActivityMenu} />
        
        case 'backgroundcolors':
            return <ColorBackgroundPicker changeBoardBackGround={changeBoardBackGround} board={board} setMode={setMode} onSetActivityMenu={onSetActivityMenu}/>
            default:
            return <MainMenu board={board} setMode={setMode} onSetActivityMenu={onSetActivityMenu} />
    }

}