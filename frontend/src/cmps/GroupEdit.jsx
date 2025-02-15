import { useSelector } from "react-redux"
import { updateBoard } from "../store/store"



export function GroupEdit({ header, onSetGroupEdit,group }) {
    const board = useSelector(state => state.boardModule.board)
    const loc = header.getBoundingClientRect()
    const inset = `${loc.top}px auto auto ${loc.right}px`

    function changeColor({target}){
      const color = target.value
      group.style.backgroundColor = color
      updateBoard(board)
    }


    return (
        <div 
            className="group-edit-container" style={{ inset }}>
            <header className="group-eddit-header">
                <p>List actions</p>
                <button onClick={onSetGroupEdit} className="close-edit">X</button>
            </header>
            <section className="edit-options">
                <section className="first-actions">
                    <button>Add card</button>
                    <button>Copy list</button>
                    <button>Move list</button>
                    <button>Move all cards in this list</button>
                    <button>Sort by...</button>
                    <button>Watch</button>
                </section>
                <section className="color-picker">
                    <div className="color-picker-header">
                        <span className="title">Change color list</span>
                        <span className="premium">PREMIUM</span>
                    </div>
                    <div className="colors">
                        <button value={'#4BCE97'} onClick={changeColor} className="green"></button>
                        <button value={'#F5CD47'} onClick={changeColor} className="yellow"></button>
                        <button  value={'#E56910'} onClick={changeColor} className="orange"></button>
                        <button value={'#f87168'} onClick={changeColor} className="red"></button>
                        <button value={'#9f8fef'} onClick={changeColor} className="purple"></button>
                        <button value={'#579dff'} onClick={changeColor} className="blue"></button>
                        <button  value={'#60c6d2'} onClick={changeColor} className="teal"></button>
                        <button value={'#94c748'} onClick={changeColor} className="lime"></button>
                        <button value={'#e774bb'} onClick={changeColor} className="magenta"></button>
                        <button value={'#8590a2'} onClick={changeColor} className="gray"></button>
                    </div>
                    <button className="remove-color"> X Remove color</button>
                </section>
            </section>

        </div>
    )
}