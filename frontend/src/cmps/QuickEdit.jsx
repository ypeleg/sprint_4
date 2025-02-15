

export function QuickEdit({pos}){

    const {top,bottom,right,left} =pos

    return(
        <div className="quick-edit-container">
            <div className="quick-edit-content" style={{top,bottom,right,left}}>
                <aside>

                <div className="option"><i class="fa-sharp-duotone fa-regular fa-address-card"></i>Open card</div>
                <div className="option"><i class="fa-regular fa-tag"></i>Edit Labels</div>
                <div className="option"><i class="fa-regular fa-user"></i>Change members</div>
                <div className="option"><i class="fa-sharp fa-regular fa-blanket"></i>Change cover</div>
                <div className="option"><i class="fa-regular fa-clock"></i>Edit Dates</div>
                </aside>
            </div>

        </div>
    )
}