

import { useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { loadBoard } from "../store/store"
import { setFilterBy } from "../store/actions/board.actions"


export function FilterCards({ el, setShowFilter }) {
    let boardToShow = useSelector(state => state.boardModule.board)
    const filterBy = useSelector(state => state.boardModule.filterBy)
    function handleChange({ target }) {
        const { type, value, name: feild } = target
        console.log(type, value, feild)
        if (type === 'text') {

            const UpdatedFilterBy = { ...filterBy, title: value }
            setFilterBy(UpdatedFilterBy)
        } else if (type === 'checkbox') {
            const index = filterBy[feild].findIndex(f => f === value)
            let updatedArray;
            if (index !== -1) {

                updatedArray = filterBy[feild].filter(f => f !== value);
            } else {

                updatedArray = [...filterBy[feild], value];
            }
            const UpdatedFilterBy = { ...filterBy, [feild]: updatedArray }
            setFilterBy(UpdatedFilterBy)
        }
    }
    useEffect(() => {
        loadBoard(boardToShow._id, filterBy)
    }, [filterBy])
    console.log(filterBy)
    return (
        <div tabIndex="0" className="filter-cards-container"  >
            <div className="filter-content">
                <header className="filter-header">

                    <div className="filter-title">Filter</div>
                    <button onClick={() => setShowFilter(false)} className="close-filter">X</button>
                </header>
                <section className="filter-options">
                    <p className="keyword">Keyword</p>
                    <div className="filter-text-container">

                        <input placeholder="Enter a Keyword..." onChange={handleChange} value={filterBy.title} type="text" name="" id="" />
                    </div>
                    <p className="serach-cards">Search cards, members, labels and more.</p>
                    <p className="keyword">Members</p>
                    <div className="member-input">
                        <input type="checkBox" onChange={handleChange} checked={(filterBy.members.includes('1'))? true:false}  value={'1'} name="members" id="members" />
                        <label className="member-label" htmlFor="members">

                            <span className="user-pic"><svg width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0254 3C9.25613 3 7.01123 5.23858 7.01123 8C7.01123 10.7614 9.25613 13 12.0254 13C14.7946 13 17.0395 10.7614 17.0395 8C17.0395 5.23858 14.7946 3 12.0254 3ZM9.01688 8C9.01688 9.65685 10.3638 11 12.0254 11C13.6869 11 15.0338 9.65685 15.0338 8C15.0338 6.34315 13.6869 5 12.0254 5C10.3638 5 9.01688 6.34315 9.01688 8Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0254 11C16.7803 11 20.6765 14.6667 21.0254 19.3194C20.8721 20.2721 20.0439 21 19.0452 21H18.9741C18.9741 21 18.9741 21 18.9741 21L5.0767 21C5.07671 21 5.0767 21 5.0767 21L5.00562 21C4.00691 21 3.1787 20.2721 3.02539 19.3193C3.37428 14.6667 7.27038 11 12.0254 11ZM5.0767 19H18.9741C18.4875 15.6077 15.5618 13 12.0254 13C8.48892 13 5.56331 15.6077 5.0767 19ZM19.0451 19.9769V20.0231C19.0452 20.0154 19.0452 20.0077 19.0452 20C19.0452 19.9923 19.0452 19.9846 19.0451 19.9769Z" fill="currentColor"></path></svg></span>
                            <span>No members</span>

                        </label>
                    </div>
                    {boardToShow.members.map(member =>{
                        return(
                            <div className="member-input">
                        <input type="checkBox" onChange={handleChange}   checked={(filterBy.members.includes(member._id))? true:false} value={member._id} name="members" id="members" />
                        <label className="member-label" htmlFor="members">

                            <span className="user-pic"><img src="roi.png" alt="" /></span>
                            <span>{member.fullname}</span>

                        </label>
                    </div>
                        )
                    })}
                </section>


            </div>

        </div>
    )
}