import { useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { loadBoard } from "../store/store"



export function FilterCards({el,setShowFilter}){
let boardToShow = useSelector(state => state.boardModule.board)
const elContainer = useRef()
    // style={{top,bottom,left,right:0}}
    useEffect(() => {
        
        elContainer.current?.focus();
      }, []); 

function handleChange({target}){
    
    const filterBy = {title:target.value}
    loadBoard(boardToShow._id,filterBy)
    }

    return (
        <div  tabIndex="0" ref={elContainer}  className="filter-cards-container" onBlur={() =>console.log('blur') } >
            <div>
                <header className="filter-header">

                    <div className="filter-title">Filter</div>
                    <button onClick={() =>setShowFilter(false)} className="close-filter">X</button>
                </header>
                <section className="filter-options">
                    <p className="keyword">Keyword</p>
                    <div className="filter-text-container">

                    <input placeholder="Enter a Keyword..." onChange={handleChange} type="text" name="" id="" />
                    </div>
                    <p className="serach-cards">Search cards, members, labels and more.</p>
                </section>


            </div>

        </div>
    )
}