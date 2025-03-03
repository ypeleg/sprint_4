

import {useNavigate} from 'react-router'
import {useState, useEffect, useRef} from "react"
import {getRandomBoard} from '../services/data.js'
import {getEmptyBoard, addBoard} from "../store/store.js"
import {MoreBackgroundsBtn} from "../cmps/MoreBackgroundsBtn.jsx"



export function CreateBoardModal({onClose, createModal}) {

    const loc = createModal.getBoundingClientRect()

    const elMoreBg = useRef()

    function calcAside() {

        const windowHeight = window.innerHeight

        let desiredTop = loc.top

        if (desiredTop + 550 + 30 > windowHeight) {
            desiredTop = -desiredTop - 550 + windowHeight - 30
        } else desiredTop = 0
        return desiredTop + 'px'
    }

    const top = calcAside()

    const initialBackgroundColor = [{name: "gray", isSelected: false, url: "color_2.svg"},
                                    {name: "lightBlue", isSelected: false, url: "color_3.svg"},
                                    {name: "blue", isSelected: false, url: "color_4.svg"},
                                    {name: "lightPurple", isSelected: false, url: "color_5.svg"},
                                    {name: "purple", isSelected: false, url: "color_1.svg"},]

    const initialBackgroundImages = [{name: 'forest', isSelected: true, url: 'https://images.unsplash.com/photo-1738249034650-6a789a081a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNzM5NDYxMzA5fA&ixlib=rb-4.0.3&q=80&w=400'},
                                     {name: 'sunset', isSelected: false, url: 'https://images.unsplash.com/photo-1735124283566-5f5707a40808?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDJ8MzE3MDk5fHx8fHwyfHwxNzM5NDYxMzA5fA&ixlib=rb-4.0.3&q=80&w=400'},
                                     {name: 'sea', isSelected: false, url: 'https://images.unsplash.com/photo-1738430275589-2cd3d0d0d57a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDN8MzE3MDk5fHx8fHwyfHwxNzM5NDYxMzA5fA&ixlib=rb-4.0.3&q=80&w=400'},
                                     {name: 'sapce', isSelected: false, url: 'https://images.unsplash.com/photo-1738236013982-9449791344de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDR8MzE3MDk5fHx8fHwyfHwxNzM5NDYxMzA5fA&ixlib=rb-4.0.3&q=80&w=400'}]

    const navgite = useNavigate()

    const [hasError, setHasError] = useState(true)
    const [boardToAdd, setBoardToAdd] = useState(getEmptyBoard())
    const [isModalOpen, setIsModalopen] = useState(false)
    const [selectedBg, setSelectedBg] = useState(initialBackgroundImages[0])
    const [backgroundImagesColors, setBackgroundColors] = useState(initialBackgroundColor)
    const [backgroundImagesImages, setBackgroundImages] = useState(initialBackgroundImages)


    useEffect(() => {
        if (boardToAdd.title === "") {
            setHasError(true)
        }
        console.log('selcted board:', selectedBg)

    }, [boardToAdd, selectedBg])

    function onChangeBackgroundColor(selectedBg) {
        console.log('selctedBG:', selectedBg)

        setBoardToAdd((prevBoard) => ({
            ...prevBoard, style: {backgroundImage: selectedBg.url},
        }))

        const updatedBackgroundsimages = backgroundImagesImages.map(bg => bg.name === selectedBg.name ? {...bg, isSelected: true} : {...bg, isSelected: false})

        const updatedBackgroundsColors = backgroundImagesColors.map(bg => bg.name === selectedBg.name ? {...bg, isSelected: true} : {...bg, isSelected: false})

        setBackgroundImages(updatedBackgroundsimages)
        setBackgroundColors(updatedBackgroundsColors)
        console.log(selectedBg)

        setSelectedBg(selectedBg)
    }

    function onChange({target}) {
        let {value, type, name: field} = target
        value = type === "number" ? +value : value

        setBoardToAdd((prevBoard) => ({...prevBoard, [field]: value}))
        setHasError(false)
    }

    async function onCreateBoard() {
        const createdBoard = await addBoard(boardToAdd)
        navgite(`/${createdBoard._id}`)
        onClose()
    }

    function onCloseMoreBgModal() {
        setIsModalopen(false)
    }

    function onTemplate() {
        const board = getRandomBoard()
        console.log(board)

        navgite(`/${board.id}`)
        onClose()
    }

    return (// <div className="modal-overlay">
        <section className="modal-content" onClick={(e) => e.stopPropagation()} style={{top, maxHeight: '550px'}}>
            <div className="modal-header ">
                <div className="title">Create board</div>
                <button className="close-btn" onClick={() => onClose()}>
                    <img src="x.svg"/>
                </button>
            </div>
            <div className="main-background" style={{
                backgroundImage: `url(${boardToAdd.style.backgroundImage})`
            }}>

                <img src="chart-background.svg"/>
            </div>

            <img src="" alt=""/>
            <section className="select-background">
                <h4>Background</h4>

                <section className="select-background">
                    <section className="select-background-images">
                        {backgroundImagesImages.map((bg) => (<div key={bg.name} className={`bg-image-option`} onClick={() => onChangeBackgroundColor(bg)} style={{
                                backgroundImage: `url(${bg.url})`, backgroundSize: "cover",
                            }}>
                                {bg.isSelected && <div className="checkmark"><img src="check-mark.svg" alt=""/></div>}
                            </div>))}
                    </section>


                    <section className="select-background-color">
                        {backgroundImagesColors.map((bg) => (<div key={bg.name} className={`bg-option ${bg.name}`} onClick={() => onChangeBackgroundColor(bg)}>
                                {bg.isSelected && <div className="checkmark"><img src="check-mark.svg" alt=""/></div>}
                            </div>))}
                        <button className="bg-option" onClick={() => setIsModalopen(true)} style={{
                            backgroundColor: "#f1f2f4"
                        }} ref={elMoreBg}><img src="3dots.svg" alt=""/>
                        </button>
                        {isModalOpen && <MoreBackgroundsBtn onClose={onCloseMoreBgModal} onChangeBg={onChangeBackgroundColor} selectedBg={selectedBg} setSelectedBg={setSelectedBg} elMoreBg={elMoreBg.current}/>}
                    </section>

                </section>

                <div className="form-group">
                    <label>Board title *</label> <input name="title" type="text" placeholder="Enter board name" value={boardToAdd.title} onChange={onChange} className={hasError ? "error-input" : ""}/> {hasError && <p className="error-text">⚠ Board title is required</p>}
                </div>

                <div className="form-group">
                    <label>Workspace</label> <select>
                    <option>Trello Workspace</option>
                </select>
                </div>

                <div className="form-group">
                    <label>Visibility</label> <select>
                    <option>Workspace</option>
                </select>
                </div>

                <button className={`create-board-btn ${hasError ? 'disabled' : ''}`} onClick={onCreateBoard}>
                    Create
                </button>

                <button className="template-btn" onClick={onTemplate}>
                    Start with a template
                </button>

                <div className="premium-section">
                    <span className="premium-label">PREMIUM</span>
                    <p className="premium-title">Create unlimited boards in Premium</p>
                    <p className="premium-text">Free Workspaces can only have up to 10 boards.</p>
                </div>

                <p className="license-text">
                By using images from Unsplash, you agree to their license and Terms of Service. </p>
            </section>

        </section>
        // </div>

    )

}