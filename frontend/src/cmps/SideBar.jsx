

import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { loadBoards, loadBoard } from "../store/store"


export function SideBar({ backgrounColor, borderColor, onToggleSideBar, sideBarOpen, useDarkTextColors }) {

    const navgite = useNavigate()

    const boards = useSelector(state => state.boardModule.boards)
    const selectedBoard = useSelector(state => state.boardModule.board)

    if (!boards.length) {
        loadBoards()
    }

    console.log(backgrounColor)
    return (
        <aside className={`side-bar ${(sideBarOpen ? '' : 'side-bar-close')}`}
            style={{
                
                backgroundColor: backgrounColor,
               

            }}

        >
            <div className="sidebar-header flex-space-between"
                style={{
                   
                    backgroundColor: backgrounColor,
                 

                }}>
                <div className="flex-space-between logo-insider">
                    <div className="board-logo">T</div>
                    <div className="near-logo">
                        <div className="bold-text">Roillo Workspace</div>
                        <div>Premium</div>
                    </div>

                </div>

                <div>
                    <button className="near-logo-btn"
                        onClick={() => onToggleSideBar()}
                        style={{
                            color: (useDarkTextColors) ? '#172b4d' : 'white'
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"
                            style={{
                                color: (useDarkTextColors) ? '#172b4d' : 'white'
                            }}>
                            <rect width="0" height="28"
                                fill={useDarkTextColors ? '#172b4d' : 'white'}
                            />
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.1573 16.6865C15.2661 16.7938 15.3524 16.9215 15.4113 17.0624C15.4703 17.2033 15.5006 17.3545 15.5006 17.5073C15.5006 17.66 15.4703 17.8112 15.4113 17.9521C15.3524 18.093 15.2661 18.2208 15.1573 18.328C14.9368 18.5457 14.6394 18.6677 14.3296 18.6677C14.0197 18.6677 13.7223 18.5457 13.5018 18.328L10.0426 14.898C9.92341 14.7798 9.82877 14.6391 9.76419 14.4842C9.69961 14.3292 9.66636 14.1629 9.66636 13.995C9.66636 13.8271 9.69961 13.6609 9.76419 13.5059C9.82877 13.3509 9.92341 13.2102 10.0426 13.092L13.4901 9.67369C13.7107 9.45568 14.0083 9.33341 14.3185 9.33341C14.6286 9.33341 14.9262 9.45568 15.1468 9.67369C15.2556 9.78093 15.3419 9.90871 15.4008 10.0496C15.4598 10.1905 15.4901 10.3417 15.4901 10.4944C15.4901 10.6472 15.4598 10.7984 15.4008 10.9393C15.3419 11.0802 15.2556 11.208 15.1468 11.3152L12.4425 13.995L15.1573 16.6865V16.6865Z"
                                fill={useDarkTextColors ? "#6B778C" : 'white'} />
                        </svg>
                        
                    </button>
                </div>

            </div>

            <section>
                <article className="sidebar-first-section">

                    <div className="side-bar-item flex-space-between nav-highlight-hint">
                        <span>
                            <svg width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16V6ZM14 5C13.4477 5 13 5.44772 13 6V12C13 12.5523 13.4477 13 14 13H18C18.5523 13 19 12.5523 19 12V6C19 5.44772 18.5523 5 18 5H14Z" fill="currentColor"></path></svg>
                            Board
                        </span> <span></span>
                    </div>

                    <div className="side-bar-item flex-space-between nav-highlight-hint">
                        <span>
                            <svg width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.0254 3C9.25613 3 7.01123 5.23858 7.01123 8C7.01123 10.7614 9.25613 13 12.0254 13C14.7946 13 17.0395 10.7614 17.0395 8C17.0395 5.23858 14.7946 3 12.0254 3ZM9.01688 8C9.01688 9.65685 10.3638 11 12.0254 11C13.6869 11 15.0338 9.65685 15.0338 8C15.0338 6.34315 13.6869 5 12.0254 5C10.3638 5 9.01688 6.34315 9.01688 8Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd"
                                d="M12.0254 11C16.7803 11 20.6765 14.6667 21.0254 19.3194C20.8721 20.2721 20.0439 21 19.0452 21H18.9741C18.9741 21 18.9741 21 18.9741 21L5.0767 21C5.07671 21 5.0767 21 5.0767 21L5.00562 21C4.00691 21 3.1787 20.2721 3.02539 19.3193C3.37428 14.6667 7.27038 11 12.0254 11ZM5.0767 19H18.9741C18.4875 15.6077 15.5618 13 12.0254 13C8.48892 13 5.56331 15.6077 5.0767 19ZM19.0451 19.9769V20.0231C19.0452 20.0154 19.0452 20.0077 19.0452 20C19.0452 19.9923 19.0452 19.9846 19.0451 19.9769Z"
                                fill="currentColor"></path></svg>
                            Members
                        </span>
                        <i className="fa-regular fa-plus"></i>
                    </div>

                    <div className="side-bar-item flex-space-between nav-highlight-hint">
                        <span>
                            <svg width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd"
                                d="M12.0017 17.0009C9.23868 17.0009 6.99968 14.7609 6.99968 11.9989C6.99968 9.23586 9.23868 6.99686 12.0017 6.99686C14.7647 6.99686 17.0037 9.23586 17.0037 11.9989C17.0037 14.7609 14.7647 17.0009 12.0017 17.0009ZM20.3697 13.8839C19.5867 13.6119 19.0237 12.8749 19.0237 11.9989C19.0237 11.1229 19.5867 10.3859 20.3687 10.1139C20.6057 10.0319 20.7517 9.78086 20.6837 9.53986C20.4847 8.83586 20.2017 8.16886 19.8477 7.54686C19.7297 7.33886 19.4707 7.26186 19.2497 7.35186C18.8647 7.50986 18.4197 7.55086 17.9587 7.43286C17.2847 7.25886 16.7337 6.70986 16.5557 6.03686C16.4337 5.57386 16.4747 5.12686 16.6317 4.73986C16.7207 4.51986 16.6437 4.26086 16.4357 4.14286C15.8187 3.79386 15.1567 3.51386 14.4607 3.31686C14.2187 3.24886 13.9687 3.39386 13.8867 3.63086C13.6147 4.41386 12.8777 4.97686 12.0017 4.97686C11.1267 4.97686 10.3887 4.41386 10.1177 3.63186C10.0347 3.39486 9.78368 3.24886 9.54268 3.31686C8.83468 3.51686 8.16368 3.80186 7.53868 4.15886C7.33768 4.27386 7.25268 4.52586 7.34068 4.74086C7.48768 5.10186 7.53268 5.51386 7.43868 5.94386C7.28368 6.64986 6.72468 7.24086 6.02568 7.42786C5.56768 7.55086 5.12768 7.51186 4.74568 7.35986C4.52568 7.27186 4.26768 7.34986 4.15068 7.55586C3.79768 8.17786 3.51568 8.84586 3.31768 9.54986C3.24968 9.78886 3.39268 10.0369 3.62568 10.1219C4.39668 10.3999 4.94868 11.1319 4.94868 11.9989C4.94868 12.8659 4.39668 13.5979 3.62468 13.8759C3.39168 13.9599 3.24968 14.2079 3.31668 14.4469C3.49368 15.0739 3.73868 15.6729 4.03968 16.2369C4.15868 16.4589 4.43468 16.5349 4.66368 16.4299C5.25868 16.1569 6.00668 16.1659 6.76768 16.6679C6.88468 16.7449 6.99268 16.8529 7.06968 16.9689C7.59668 17.7679 7.58168 18.5489 7.26768 19.1559C7.15268 19.3789 7.21968 19.6569 7.43568 19.7839C8.08968 20.1679 8.79768 20.4709 9.54468 20.6809C9.78568 20.7489 10.0337 20.6049 10.1147 20.3679C10.3837 19.5819 11.1237 19.0149 12.0017 19.0149C12.8797 19.0149 13.6197 19.5819 13.8887 20.3679C13.9697 20.6039 14.2177 20.7489 14.4587 20.6809C15.1957 20.4739 15.8947 20.1749 16.5427 19.7979C16.7607 19.6709 16.8267 19.3899 16.7097 19.1669C16.3917 18.5589 16.3727 17.7739 16.9007 16.9719C16.9777 16.8559 17.0857 16.7469 17.2027 16.6699C17.9747 16.1589 18.7297 16.1569 19.3277 16.4399C19.5567 16.5479 19.8357 16.4729 19.9557 16.2499C20.2597 15.6859 20.5047 15.0859 20.6837 14.4569C20.7517 14.2159 20.6067 13.9659 20.3697 13.8839Z"
                                fill="currentColor"></path></svg>
                            Workspace settings
                        </span>
                        <i className="fa-regular fa-chevron-down"></i>
                    </div>

                </article>
            </section>

            <button className="label"> PREMIUM </button>

            <section>
                <div className="side-section-header">
                    <h5>Workspace views</h5>
                    <i className="fa-regular fa-plus"></i>
                </div>
                <article>

                    <div className="side-bar-item side-bar-sec-items flex-space-between  nav-highlight-hint">
                        <span>
                            <svg width="16" height="16" role="presentation" focusable="false" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.66683 9.66665C0.93045 9.66665 0.333496 9.06969 0.333496 8.33331V1.66665C0.333496 0.930267 0.93045 0.333313 1.66683 0.333313H12.3335C13.0699 0.333313 13.6668 0.930267 13.6668 1.66665V8.33331C13.6668 9.06969 13.0699 9.66665 12.3335 9.66665H1.66683ZM12.3335 5.66665V4.33331H5.66683V5.66665H12.3335ZM12.3335 2.99998V1.66665H5.66683V2.99998H12.3335ZM12.3335 6.99998V8.33331H5.66683V6.99998H12.3335ZM1.66683 4.33331V5.66665H4.3335V4.33331H1.66683ZM1.66683 6.99998V8.33331H4.3335V6.99998H1.66683ZM1.66683 2.99998V1.66665H4.3335V2.99998H1.66683Z" fill="currentColor"></path></svg>
                            Table
                        </span>
                        <span></span>
                    </div>

                    <div className="side-bar-item side-bar-sec-items flex-space-between  nav-highlight-hint">
                        <span>
                            <svg width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6 4V5H4.995C3.892 5 3 5.893 3 6.994V19.006C3 20.106 3.893 21 4.995 21H19.005C20.108 21 21 20.107 21 19.006V6.994C21 5.895 20.107 5 19.005 5H18V4C18 3.448 17.552 3 17 3C16.448 3 16 3.448 16 4V5H8V4C8 3.448 7.552 3 7 3C6.448 3 6 3.448 6 4ZM5.25 9.571V17.718C5.25 18.273 5.694 18.714 6.243 18.714H17.758C18.3 18.714 18.75 18.268 18.75 17.718V9.571H5.25ZM9 13V10.999H7V13H9ZM17 10.999V13H15V10.999H17ZM11 13H13.001V10.999H11V13ZM7 17V15H9V17H7ZM11 17H13.001V15H11V17ZM17 15V17H15V15H17Z" fill="currentColor"></path></svg>
                            Calendar
                        </span>
                        <span></span>
                    </div>

                </article>
            </section>

            <section>
                <div className="side-section-header">
                    <h5>Your Boards</h5>
                    <i className="fa-regular fa-plus"></i>
                </div>
                <article>

                    {boards.map(board => {

                        return (<div key={board.id} style={(board._id === selectedBoard._id) ? { backgroundColor: 'hsla(0, 0%, 0%, 0.16)' } : null} onClick={() => loadBoard(board._id)} className="side-bar-item side-bar-item-third flex-space-between nav-highlight-hint">

                            <div className="board-sideitem just-flex">
                                <img className="small-img" src={board.style.backgroundImage} />
                                <div>{board.title}</div>
                            </div>
                            <i className="fa-regular fa-ellipsis-h"></i>
                            {(!board.isStarred) && <i className="fa-regular fa-star"></i>}
                            {(board.isStarred) && <i className="fa-solid-fr fa-star"></i>}


                        </div>)

                    })}

                </article>
            </section>

        </aside>)
}