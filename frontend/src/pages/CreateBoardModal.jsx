
export function CreateBoardModal() {

  return (
    <section className="modal-content">
      <h3>Create board</h3>
      <img src="" alt="" />

      <section className="select-background">
        <h4>Background</h4>
        <div className="background-images">

        </div>
        <section className="select-background-color">
          <div className="bg-option blue"></div>
          <div className="bg-option purple"></div>
          <div className="bg-option orange"></div>
          <div className="bg-option gray"></div>
          <div className="bg-option lightblue"></div>

        </section>

        {/* Board Title Input */}
        <div className="form-group">
          <label>Board title *</label>
          <input
            type="text"
            placeholder="Enter board name"
          // value={boardTitle}
          // onChange={(e) => setBoardTitle(e.target.value)}
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
        // className={`create-btn ${boardTitle.trim() === "" ? "disabled" : ""}`}
        // onClick={handleCreate}
        // disabled={boardTitle.trim() === ""}
        >
          Create
        </button>

      </section>
    </section>
  )

}