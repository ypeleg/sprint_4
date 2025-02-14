import { updateBoard } from "../store/store.js"


export function BoardPreview({ board }) {

    async function setIsStarred(ev) {
        ev.stopPropagation()
        board.isStarred = !board.isStarred
        console.log(board.isStarred);

        const boardToSave = await updateBoard(board)
        console.log(boardToSave);

    }

    return <article className="board-preview" style={{ backgroundImage: `url(${board.style.backgroundImage})` }}>
        <h4>{board.title}</h4>
        {!board.isStarred ? (
            <div className="fa-solid fa-star star-btn" onClick={setIsStarred} > </div>
        ) : (
            <div className="fill-star"
                onClick={setIsStarred}
            >
                <img src="star-solid.svg" alt="" />
            </div>
        )
        }

    </article>
}