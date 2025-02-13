import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { loadBoards, getEmptyBoard, loadBoard, addBoard, updateBoard, removeBoard } from "../store/store.js"


export function CreateBoardModal({ onClose }) {

  const [boardToAdd, setBoardToAdd] = useState(getEmptyBoard())
  const [hasError, setHasError] = useState(false);

  console.log(boardToAdd);

  useEffect(() => {
    if (boardToAdd.title === "") {
      setHasError(true)
    }

  }, [boardToAdd])

  const backgroundsColor = [
    { name: "gray", url: "https://trello.com/assets/13425f9db06517de0f7f.svg" },
    { name: "lightBlue", url: "https://trello.com/assets/707f35bc691220846678.svg" },
    { name: "blue", url: "https://trello.com/assets/d106776cb297f000b1f4.svg" },
    { name: "lightPurple", url: "https://trello.com/assets/8ab3b35f3a786bb6cdac.svg" },
    { name: "purple", url: "https://trello.com/assets/a7c521b94eb153008f2d.svg" },
  ]

  const backgroundImages = [
    { name: 'forest', url: 'https://images.unsplash.com/photo-1738249034650-6a789a081a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNzM5NDYxMzA5fA&ixlib=rb-4.0.3&q=80&w=400' },
    { name: 'sunset', url: 'https://images.unsplash.com/photo-1735124283566-5f5707a40808?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDJ8MzE3MDk5fHx8fHwyfHwxNzM5NDYxMzA5fA&ixlib=rb-4.0.3&q=80&w=400' },
    { name: 'sea', url: 'https://images.unsplash.com/photo-1738430275589-2cd3d0d0d57a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDN8MzE3MDk5fHx8fHwyfHwxNzM5NDYxMzA5fA&ixlib=rb-4.0.3&q=80&w=400' },
    { name: 'sapce', url: 'https://images.unsplash.com/photo-1738236013982-9449791344de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDR8MzE3MDk5fHx8fHwyfHwxNzM5NDYxMzA5fA&ixlib=rb-4.0.3&q=80&w=400' }
  ]

  // Function to change background
  function onChangeBackgroundColor(bgUrl) {
    setBoardToAdd((prevBoard) => ({
      ...prevBoard,
      style: { backgroundImage: bgUrl },
    }));
  }

  function handleChange({ target }) {
    let { value, type, name: field } = target;
    value = type === "number" ? +value : value;

    setBoardToAdd((prevBoard) => ({ ...prevBoard, [field]: value }));
    setHasError(false);
    // setHasUnsavedChanges(true);
  }

  function handleCreateBoard() {
    addBoard(boardToAdd)
    onClose()
  }




  return (
    <div className="modal-overlay">
      <section className="modal-content">
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
        </div>

        <img src="" alt="" />
        <section className="select-background">
          <h4>Background</h4>

          <section className="select-background">
            <section className="select-background-images">
              {backgroundImages.map((bg) => (
                <div
                  key={bg.name}
                  className={`bg-image-option`}
                  onClick={() => onChangeBackgroundColor(bg.url)}
                  style={{
                    backgroundImage: `url(${bg.url})`,
                    backgroundSize: "cover",
                  }}
                ></div>
              ))}
            </section>


            <section className="select-background-color">
              {backgroundsColor.map((bg) => (
                <div
                  key={bg.name}
                  className={`bg-option ${bg.name}`}
                  onClick={() => onChangeBackgroundColor(bg.url)}
                ></div>
              ))}
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
            className={`create-btn ${hasError ? 'disabled' : ''}`}
            onClick={handleCreateBoard}
          >
            Create
          </button>

          <button className="template-btn">
            Start with a template
          </button>

          {/* Premium Div */}
          <div className="premium-banner">
            PREMIUM
          </div>

        </section>
      </section>
    </div>

  )

}