import { Link } from 'react-router-dom'


export function BoardPreview({ board }) {
  console.log(board.style.backgroundImage);

  return <article className="board-preview" style={{ backgroundImage: `url(${board.style.backgroundImage})` }}>
    <h4>{board.title}</h4>

    <div className="fa-solid fa-star star-btn"></div>
  </article>
}