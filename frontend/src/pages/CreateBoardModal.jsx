import { useSelector } from "react-redux";
import { useState } from "react";

import { loadBoards, getEmptyBoard, loadBoard, addBoard, updateBoard, removeBoard } from "../store/store.js"


export function CreateBoardModal() {

  const [boardToAdd, setBoardToAdd] = useState(getEmptyBoard())
  console.log(boardToAdd);

  function handleChange({ target }) {
    let { value, type, name: field } = target;
    value = type === "number" ? +value : value;

    setBoardToAdd((prevBoard) => ({ ...prevBoard, title: value }));
    // setHasUnsavedChanges(true);
  }

  function onChangeBackgroundColor(bg) {

  }


  return (
    <div className="modal-overlay">
      <section className="modal-content">
        <div className="flex justify-center">
          <h3>Create board</h3>

        </div>
        <div className="main-background gray"></div>

        <img src="" alt="" />
        <section className="select-background">
          <h4>Background</h4>

          <section className="select-background">
            <section className="background-images">
              <div className="bg-image-option gray"></div>
            </section>


            <section className="select-background-color">
              <div className="bg-option gray"></div>
              <div className="bg-option lightBlue"></div>
              <div className="bg-option blue"></div>
              <div className="bg-option lightPurple"></div>
              <div className="bg-option purple"></div>
              <div className="bg-option more-bg-btn">...</div>

            </section>

          </section>

          {/* Board Title Input */}
          <div className="form-group">
            <label>Board title *</label>
            <input
              type="text"
              placeholder="Enter board name"
              value={boardToAdd.title}
              onChange={handleChange}
            />
            {/* {boardTitle.trim() === "" && <p className="error-text">⚠ Board title is required</p>} */}
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
            className="create-btn"
            // className={`create-btn ${boardTitle.trim() === "" ? "disabled" : ""}`}
            onClick={() => addBoard(boardToAdd)}
          // disabled={boardTitle.trim() === ""}
          >
            Create
          </button>

        </section>
      </section>
    </div>

  )

}