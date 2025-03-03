

import {useState, useRef} from 'react'
import {useNavigate} from 'react-router'
import {BoardPreview} from '../cmps/BoardPreview.jsx'
import {CreateBoardModal} from './CreateBoardModal.jsx'


export function BoardList({boards, addBoard = false}) {

    const [isModalOpen, setIsModalopen] = useState(false)
    const navgite = useNavigate()
    const elCreatePreview = useRef()

    function onClose() {
        setIsModalopen(false)
    }

    return (<section>
            <ul className="board-list">

                {boards.map(board => <li key={board._id} onClick={() => navgite(`/${board._id}`)}>
                    <BoardPreview board={board}/>
                </li>)} {addBoard && <article className="board-preview create-board-preview" onClick={() => setIsModalopen(!isModalOpen)}>
                <div className="create-board-title" ref={elCreatePreview}>Create new board</div>
                {isModalOpen && <CreateBoardModal onClose={onClose} createModal={elCreatePreview.current}/>}
            </article>}
            </ul>
        </section>)
}