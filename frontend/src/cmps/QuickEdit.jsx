

import React from "react"
import {useEffect} from "react"


export function QuickEdit({setQuickEdit, closePopupOnlyIfClickedOutOfIt, pos}){

    const {rect, card, coords} = pos
    const {top,bottom,right,left} = rect
    const {y, x, w, h} = coords

    // render the card element from the pos object, it was obtained with cloneNode
    // const card = pos.card.cloneNode(true)
    // card.style.position = "absolute"
    // card.style.top = "0"
    // card.style.left = "0"
    // card.style.right = "0"
    // card.style.bottom = "0"

    // put it in popup-backdrop-plus-plus
    useEffect(() => {
        const cardContainer = document.querySelector(".quick-edit-card-container")
        const wrapper = document.createElement("div")
        wrapper.className = "task-list"
        wrapper.style.maxWidth = w + "px"
        wrapper.style.width = w + "px"
        wrapper.style.height = h + "px"
        wrapper.style.display = "contents"
        wrapper.style.margin = 0
        wrapper.style.padding = 0
        // wrapper.style.boxShadow = "0 8px 16px rgba(0, 0, 0, .2)"

        cardContainer.style.marginInline = "0"
        cardContainer.style.width = w + "px"
        cardContainer.style.height = h + "px"
        cardContainer.style.top = 0;
        cardContainer.style.left = 0;
        cardContainer.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px"
        wrapper.appendChild(card)
        cardContainer.appendChild(wrapper)
    }, [])





    return (
        <>
        <div onClick={(ev) => closePopupOnlyIfClickedOutOfIt(ev)} className="quick-edit-container">
            <div className="quick-edit-content" style={{top:y, left:x}}>
                {/*bottom, right,*/}
                <div className="just-flex-quick-edit">
                    <div className="quick-edit-card-container"></div>
                    <button style={{top: y,  marginTop: (h * 1.05) + 'px'}} className="quick-edit-save-button">Save</button>
                    <aside style={{marginLeft: w * 1.05}}>
                        <div className="option"><i class="fa-sharp-duotone fa-regular fa-address-card"></i>Open card</div>
                        <div className="option"><i class="fa-regular fa-tag"></i>Edit Labels</div>
                        <div className="option"><i class="fa-regular fa-user"></i>Change members</div>
                        <div className="option"><i class="fa-sharp fa-regular fa-blanket"></i>Change cover</div>
                        <div className="option"><i class="fa-regular fa-clock"></i>Edit Dates</div>
                    </aside>

                </div>
            </div>
        </div>
            <div className="popup-backdrop-plus-plus" onClick={closePopupOnlyIfClickedOutOfIt}>

        </div>
        </>
    )
}
