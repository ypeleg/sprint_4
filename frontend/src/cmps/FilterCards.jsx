



import { useSelector } from "react-redux"
import { useEffect, useRef, useState } from "react"
import { setFilterBy } from "../store/actions/board.actions"


export function FilterCards({ el, setShowFilter }) {
    let boardToShow = useSelector(state => state.boardModule.board)
    const filterBy = useSelector(state => state.boardModule.filterBy)
    const [completedSelected, setCompletedSelected] = useState()


    function onSetCompltedSelected(value) {
        if (completedSelected === value) setCompletedSelected(null)
        else setCompletedSelected(value)

    }

    function onChangeFilter({ target }) {
        console.log('inside on change filter')
        let { type, value, name: feild } = target
        console.log(type, value, feild)
        if (type === 'text') {

            const UpdatedFilterBy = { ...filterBy, title: value }
            setFilterBy(UpdatedFilterBy)
        } else if (feild === 'members' || feild === 'dueDate') {
            const index = filterBy[feild].findIndex(f => f === value)
            let updatedArray
            if (index !== -1) {

                updatedArray = filterBy[feild].filter(f => f !== value)
            } else {

                updatedArray = [...filterBy[feild], value]
            }
            const UpdatedFilterBy = { ...filterBy, [feild]: updatedArray }
            setFilterBy(UpdatedFilterBy)
        } else if (feild === 'status') {
            onSetCompltedSelected(value)
            if (value === filterBy[feild]) {
                value = ''
            }
            const UpdatedFilterBy = { ...filterBy, [feild]: value }
            setFilterBy(UpdatedFilterBy)
        }
    }


    return (
        <div tabIndex="0" className="filter-cards-container header-popup recent-popup popup-opens-right"  >
            <div className="filter-content">
                <header className="filter-header">

                    <div className="filter-title">Filter</div>
                    <button onClick={() => setShowFilter(false)} className="close-filter"><span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor"></path></svg></span></button>
                </header>
                <section className="filter-options">
                    <p className="keyword">Keyword</p>
                    <div className="filter-text-container">

                        <input placeholder="Enter a Keyword..." onChange={onChangeFilter} value={filterBy.title} type="text" name="" id="" />
                    </div>
                    <p className="serach-cards">Search cards, members, labels and more.</p>
                    <p className="keyword">Members</p>
                    <div className="member-input">
                        <input type="checkBox" onChange={onChangeFilter} checked={(filterBy.members.includes('1')) ? true : false} value={'1'} name="members" id="members" />
                        <label className="member-label" htmlFor="members">

                            <span className="user-pic"><svg width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.0254 3C9.25613 3 7.01123 5.23858 7.01123 8C7.01123 10.7614 9.25613 13 12.0254 13C14.7946 13 17.0395 10.7614 17.0395 8C17.0395 5.23858 14.7946 3 12.0254 3ZM9.01688 8C9.01688 9.65685 10.3638 11 12.0254 11C13.6869 11 15.0338 9.65685 15.0338 8C15.0338 6.34315 13.6869 5 12.0254 5C10.3638 5 9.01688 6.34315 9.01688 8Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M12.0254 11C16.7803 11 20.6765 14.6667 21.0254 19.3194C20.8721 20.2721 20.0439 21 19.0452 21H18.9741C18.9741 21 18.9741 21 18.9741 21L5.0767 21C5.07671 21 5.0767 21 5.0767 21L5.00562 21C4.00691 21 3.1787 20.2721 3.02539 19.3193C3.37428 14.6667 7.27038 11 12.0254 11ZM5.0767 19H18.9741C18.4875 15.6077 15.5618 13 12.0254 13C8.48892 13 5.56331 15.6077 5.0767 19ZM19.0451 19.9769V20.0231C19.0452 20.0154 19.0452 20.0077 19.0452 20C19.0452 19.9923 19.0452 19.9846 19.0451 19.9769Z" fill="currentColor"></path></svg></span>
                            <span>No members</span>

                        </label>
                    </div>
                    {boardToShow.members.map(member => {
                        return (
                            <div className="member-input">
                                <input type="checkBox" onChange={onChangeFilter} checked={(filterBy.members.includes(member._id)) ? true : false} value={member._id} name="members" id="members" />
                                <label className="member-label" htmlFor="members">

                                    <span className="user-pic"><img src="roi.png" alt="" /></span>
                                    <span>{member.fullname}</span>

                                </label>
                            </div>
                        )
                    })}
                    <p className="keyword">Members</p>
                    <div className="member-input">
                        <input value={'done'} checked={completedSelected === 'done'} type="checkBox" onChange={onChangeFilter} name="status" id="status" />
                        <label className="member-label" htmlFor="status">


                            <span>Marked as complete</span>

                        </label>
                    </div>
                    <div className="complete-input">
                        <input checked={completedSelected === 'aaaa'} value={'aaaa'} type="checkBox" onChange={onChangeFilter} name="status" id="status" />
                        <label className="member-label" htmlFor="status">


                            <span>Not marked as complete</span>

                        </label>
                    </div>

                    <p className="keyword">Due date</p>

                    <div className="member-input">
                        <input type="checkBox" value={'no'} onChange={onChangeFilter} name="dueDate" id="dueDate" />
                        <label className="member-label" htmlFor="dueDate">


                            <div className="date-container">
                                <span className="circle grey ">
                                <svg width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 4V5H4.995C3.892 5 3 5.893 3 6.994V19.006C3 20.106 3.893 21 4.995 21H19.005C20.108 21 21 20.107 21 19.006V6.994C21 5.895 20.107 5 19.005 5H18V4C18 3.448 17.552 3 17 3C16.448 3 16 3.448 16 4V5H8V4C8 3.448 7.552 3 7 3C6.448 3 6 3.448 6 4ZM5.25 9.571V17.718C5.25 18.273 5.694 18.714 6.243 18.714H17.758C18.3 18.714 18.75 18.268 18.75 17.718V9.571H5.25ZM9 13V10.999H7V13H9ZM17 10.999V13H15V10.999H17ZM11 13H13.001V10.999H11V13ZM7 17V15H9V17H7ZM11 17H13.001V15H11V17ZM17 15V17H15V15H17Z" fill="currentColor"></path></svg>
                                </span>
                                <span>No dates</span>
                            </div>

                        </label>
                    </div>
                    <div className="member-input">
                        <input value={'over'}  type="checkBox" onChange={onChangeFilter} name="dueDate" id="dueDate" />
                        <label className="member-label" htmlFor="dueDate">
                            <div className="date-container">
                                <span className="circle red">
                                    <svg width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V12C11 12.2652 11.1054 12.5196 11.2929 12.7071L13.7929 15.2071C14.1834 15.5976 14.8166 15.5976 15.2071 15.2071C15.5976 14.8166 15.5976 14.1834 15.2071 13.7929L13 11.5858V6Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" fill="currentColor"></path></svg>
                                </span>
                                <span>Over Due</span>
                            </div>

                        </label>
                    </div>
                    <div className="member-input">
                        <input value={'week'} type="checkBox" onChange={onChangeFilter} name="dueDate" id="dueDate" />
                        <label className="member-label" htmlFor="dueDate">
                            <div className="date-container">
                                <span className="circle yellow">
                                    <svg width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V12C11 12.2652 11.1054 12.5196 11.2929 12.7071L13.7929 15.2071C14.1834 15.5976 14.8166 15.5976 15.2071 15.2071C15.5976 14.8166 15.5976 14.1834 15.2071 13.7929L13 11.5858V6Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" fill="currentColor"></path></svg>
                                </span>
                                <span>Due in the next week</span>
                            </div>


                        </label>
                    </div>
                </section>


            </div>

        </div>
    )
}

