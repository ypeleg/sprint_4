

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getEmptyBoard, addBoard } from "../store/store.js"
import { useNavigate } from 'react-router'
import { MoreBackgroundsBtn } from "../cmps/MoreBackgroundsBtn.jsx";


export function CreateBoardModal({ onClose, createModal }) {

  const loc = createModal.getBoundingClientRect()
  const inset = `auto ${loc.left}px auto ${loc.top}px`

  const initialBackgroundColor = [
    { name: "gray", isSelected: false, url: "https://trello.com/assets/13425f9db06517de0f7f.svg" },
    { name: "lightBlue", isSelected: false, url: "https://trello.com/assets/707f35bc691220846678.svg" },
    { name: "blue", isSelected: false, url: "https://trello.com/assets/d106776cb297f000b1f4.svg" },
    { name: "lightPurple", isSelected: false, url: "https://trello.com/assets/8ab3b35f3a786bb6cdac.svg" },
    { name: "purple", isSelected: false, url: "https://trello.com/assets/a7c521b94eb153008f2d.svg" },
  ]

  const initialBackgroundImages = [
    { name: 'forest', isSelected: true, url: 'https://images.unsplash.com/photo-1738249034650-6a789a081a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNzM5NDYxMzA5fA&ixlib=rb-4.0.3&q=80&w=400' },
    { name: 'sunset', isSelected: false, url: 'https://images.unsplash.com/photo-1735124283566-5f5707a40808?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDJ8MzE3MDk5fHx8fHwyfHwxNzM5NDYxMzA5fA&ixlib=rb-4.0.3&q=80&w=400' },
    { name: 'sea', isSelected: false, url: 'https://images.unsplash.com/photo-1738430275589-2cd3d0d0d57a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDN8MzE3MDk5fHx8fHwyfHwxNzM5NDYxMzA5fA&ixlib=rb-4.0.3&q=80&w=400' },
    { name: 'sapce', isSelected: false, url: 'https://images.unsplash.com/photo-1738236013982-9449791344de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDR8MzE3MDk5fHx8fHwyfHwxNzM5NDYxMzA5fA&ixlib=rb-4.0.3&q=80&w=400' }
  ]

  const [boardToAdd, setBoardToAdd] = useState(getEmptyBoard())
  const [selectedBg, setSelectedBg] = useState(initialBackgroundImages[0])
  const [backgroundImagesImages, setBackgroundImages] = useState(initialBackgroundImages)
  const [backgroundImagesColors, setBackgroundColors] = useState(initialBackgroundColor)
  const [isModalOpen, setIsModalopen] = useState(false)


  const [hasError, setHasError] = useState(true);
  const navgite = useNavigate()

  useEffect(() => {
    if (boardToAdd.title === "") {
      setHasError(true)
    }
    console.log('selcted board:', selectedBg)

  }, [boardToAdd, selectedBg])

  function onChangeBackgroundColor(selectedBg) {
    console.log('selctedBG:', selectedBg)

    setBoardToAdd((prevBoard) => ({
      ...prevBoard,
      style: { backgroundImage: selectedBg.url },
    }))

    const updatedBackgroundsimages = backgroundImagesImages.map(bg =>
      bg.name === selectedBg.name ? { ...bg, isSelected: true } : { ...bg, isSelected: false }
    )

    const updatedBackgroundsColors = backgroundImagesColors.map(bg =>
      bg.name === selectedBg.name ? { ...bg, isSelected: true } : { ...bg, isSelected: false }
    )

    setBackgroundImages(updatedBackgroundsimages)
    setBackgroundColors(updatedBackgroundsColors)
    console.log(selectedBg);

    setSelectedBg(selectedBg)
  }

  function handleChange({ target }) {
    let { value, type, name: field } = target;
    value = type === "number" ? +value : value;

    setBoardToAdd((prevBoard) => ({ ...prevBoard, [field]: value }));
    setHasError(false);
  }

  async function handleCreateBoard() {
    const createdBoard = await addBoard(boardToAdd)
    navgite(`/${createdBoard._id}`)
    onClose()
  }

  function onCloseMoreBgModal() {
    setIsModalopen(false)
  }

  return (
    <div className="modal-overlay">
      <section className="modal-content" style={{ inset }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header ">
          <div className="title">Create board</div>
          <button className="close-btn" onClick={() => onClose()}>
            <img src="x.svg" />
          </button>
        </div>
        <div className="main-background"
          style={{
            backgroundImage: `url(${boardToAdd.style.backgroundImage})`
          }}>
          {/* <div className="chart-background" style={{img}}>
            </div> */}
          <img src="chart-background.svg" />
        </div>

        <img src="" alt="" />
        <section className="select-background">
          <h4>Background</h4>

          <section className="select-background">
            <section className="select-background-images">
              {backgroundImagesImages.map((bg) => (
                <div
                  key={bg.name}
                  className={`bg-image-option`}
                  onClick={() => onChangeBackgroundColor(bg)}
                  style={{
                    backgroundImage: `url(${bg.url})`,
                    backgroundSize: "cover",
                  }}
                >
                  {bg.isSelected && <div className="checkmark"><img src="check-mark.svg" alt="" /></div>}
                </div>
              ))}
            </section>


            <section className="select-background-color">
              {backgroundImagesColors.map((bg) => (
                <div
                  key={bg.name}
                  className={`bg-option ${bg.name}`}
                  onClick={() => onChangeBackgroundColor(bg)}
                >
                  {bg.isSelected && <div className="checkmark"><img src="check-mark.svg" alt="" /></div>}
                </div>
              ))}
              <button className="bg-option"
                onClick={() => setIsModalopen(true)}
                style={{
                  backgroundColor: "#f1f2f4"
                }}
              ><img src="3dots.svg" alt="" />
              </button>
              {isModalOpen &&
                <MoreBackgroundsBtn
                  onClose={onCloseMoreBgModal}
                  onChangeBg={onChangeBackgroundColor}
                  selectedBg={selectedBg}
                  setSelectedBg={setSelectedBg}
                />
              }
            </section>

          </section>

          {/* Board Title Input */}
          <div className="form-group">
            <label>Board title *</label>
            <input
              name="title"
              type="text"
              placeholder="Enter board name"
              value={boardToAdd.title}
              onChange={handleChange}
              className={hasError ? "error-input" : ""}
            />
            {hasError && <p className="error-text">⚠ Board title is required</p>}
          </div>

          {/* Workspace & Visibility */}
          <div className="form-group">
            <label>Workspace</label>
            <select>
              <option>Trello Workspace</option>
            </select>
          </div>

          <div className="form-group">
            <label>Visibility</label>
            <select>
              <option>Workspace</option>
            </select>
          </div>

          {/* Create Button */}
          <button
            className={`create-board-btn ${hasError ? 'disabled' : ''}`}
            onClick={handleCreateBoard}
          >
            Create
          </button>

          <button className="template-btn">
            Start with a template
          </button>

          {/* Premium Div */}
          <div className="premium-section">
            <span className="premium-label">PREMIUM</span>
            <p className="premium-title">Create unlimited boards in Premium</p>
            <p className="premium-text">Free Workspaces can only have up to 10 boards.</p>
          </div>

          {/* License Info */}
          <p className="license-text">
            By using images from Unsplash, you agree to their license and Terms of Service.
          </p>

        </section>
      </section>
    </div>

  )

}