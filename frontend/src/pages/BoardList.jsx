
// import { userService } from '../services/user'
import { useNavigate } from 'react-router'
import { BoardPreview } from './BoardPreview.jsx'

export function BoardList({ boards, onRemoveBoard, onUpdateBoard }) {

  // function shouldShowActionBtns(board) {
  //     const user = userService.getLoggedinUser()

  //     if (!user) return false
  //     if (user.isAdmin) return true
  //     return board.owner?._id === user._id
  // }
const navgite = useNavigate()
  return (
    <section>
      <ul className="board-list">
        {boards.map(board =>
          <li key={board._id} onClick={()=> navgite(`/${board._id}`)}>
            <BoardPreview board={board} />
          </li>)
        }
        <article className="board-preview create-board-preview">
          <h4>Create new board</h4>
        </article>
      </ul>
    </section>
  )
}