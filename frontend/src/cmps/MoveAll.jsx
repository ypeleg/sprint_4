


export function MoveAll(){

    const loc = header.getBoundingClientRect()
    const inset = `${loc.top}px auto auto ${loc.right}px`
    return (
        <div className="copy-list-form" style={{ inset }}>
            <div className="header">
                <button onClick={() => { onSetCopyList(); onSetGroupEdit() }}>

                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <span className="title">Copy list</span>
                <button onClick={onSetCopyList}>X</button>
            </div>
            <section className="move-list">
                <span className="name">Name</span>
                <textarea onChange={onSetGroupTitle} value={groupTitle} name="" id=""></textarea>
                <button className="create" onClick={copylist}><span>Create list</span></button>
            </section>
        </div>
    )
}