

import {useState} from 'react'
import {useNavigate} from 'react-router'
import {BoardPreview} from '../cmps/BoardPreview.jsx'
import {CreateBoardModal} from './CreateBoardModal.jsx'


export function BoardList({boards, onRemoveBoard, onUpdateBoard, addBoard = false}) {

    const [isModalOpen, setIsModalopen] = useState(false)
    const navgite = useNavigate()

    function onClose() {
        setIsModalopen(false)
        console.log('sss');

    }

    return (
        <section>
            {/* {addBoard &&
        <section className='workspace-header'>
          <div className='title-workspace'>
            <div className='board-logo'>T</div>
            <h3>Trello Workspace</h3>
          </div>

          <nav className="nav-editor-board">
            <button className='board-btn'>Boards</button>
            <button className='board-btn'>Views</button>
            <button className='board-btn'>Memmber <span>1</span></button>
            <button className='board-btn'>Settings</button>
          </nav>
        </section>
      } */}


            <ul className="board-list">
                {boards.map(board =>
                    <li key={board._id}
                        onClick={() => navgite(`/${board._id}`)}
                    >
                        <BoardPreview board={board}/>
                    </li>)
                }
                {addBoard &&
                    <article className="board-preview create-board-preview"
                             onClick={() => setIsModalopen(!isModalOpen)}
                    >
                        <h4>Create new board</h4>
                        {isModalOpen &&
                            <CreateBoardModal onClose={onClose}/>
                        }
                    </article>
                }
            </ul>

            {/* <CreateBoardModal onClose={onClose} /> */}
        </section>
    )
}