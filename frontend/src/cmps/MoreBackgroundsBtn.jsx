
import { useState, useEffect } from "react";

export function MoreBackgroundsBtn({ onClose, onChangeBg, setSelectedBg, elMoreBg }) {

  const loc = elMoreBg.getBoundingClientRect()


  const initialBackgroundColor = [
    { name: "orenge", isSelected: false, url: "https://trello.com/assets/aec98becb6d15a5fc95e.svg" },
    { name: "pink", isSelected: false, url: "https://trello.com/assets/b75536d1afb40980ca57.svg" },
    { name: "green", isSelected: false, url: "https://trello.com/assets/92e67a71aaaa98dea5ad.svg" },
    { name: "gray-light", isSelected: false, url: "https://trello.com/assets/941e9fef7b1b1129b904.svg" },
    { name: "bodo", isSelected: false, url: "https://trello.com/assets/1cbae06b1a428ad6234a.svg" },
    { name: "bodo", isSelected: false, url: "https://trello.com/assets/1cbae06b1a428ad6234a.svg" },
  ]

  const initialBackgroundImages = [
    { name: 'montian', isSelected: false, url: 'https://images.unsplash.com/photo-1739643247007-044e2623ca98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDN8MzE3MDk5fHx8fHwyfHwxNzM5ODgyOTY1fA&ixlib=rb-4.0.3&q=80&w=400' },
    { name: 'dark-light', isSelected: false, url: 'https://images.unsplash.com/photo-1739614621579-8f8f396c7412?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDJ8MzE3MDk5fHx8fHwyfHwxNzM5ODgyOTY1fA&ixlib=rb-4.0.3&q=80&w=400' },
    { name: 'dna', isSelected: false, url: 'https://images.unsplash.com/photo-1738300332814-225c81707b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNzM5ODgyOTY1fA&ixlib=rb-4.0.3&q=80&w=400' },
    { name: 'snow', isSelected: false, url: 'https://images.unsplash.com/photo-1736332654737-1224ed263915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDR8MzE3MDk5fHx8fHwyfHwxNzM5ODgyOTY1fA&ixlib=rb-4.0.3&q=80&w=400' },
    { name: 'stars', isSelected: false, url: 'https://images.unsplash.com/photo-1739761613270-a48d0d1190ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDV8MzE3MDk5fHx8fHwyfHwxNzM5ODgyOTY1fA&ixlib=rb-4.0.3&q=80&w=400' },
    { name: 'mirror', isSelected: false, url: 'https://images.unsplash.com/photo-1739733901481-2c0074e33ede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDZ8MzE3MDk5fHx8fHwyfHwxNzM5ODgyOTY1fA&ixlib=rb-4.0.3&q=80&w=400' }
  ]

  const [backgroundImagesImages, setBackgroundImages] = useState(initialBackgroundImages)
  const [backgroundImagesColors, setBackgroundColors] = useState(initialBackgroundColor)



  function changeBg(bg) {
    setBackgroundImages((prevImages) =>
      prevImages.map((item) => ({
        ...item,
        isSelected: item.name === bg.name,
      }))
    )

    setBackgroundColors((prevColors) =>
      prevColors.map((item) => ({
        ...item,
        isSelected: item.name === bg.name,
      }))
    )
    setSelectedBg(bg)
    onChangeBg(bg)
  }

  return (
    <div className="mini-modal-content">
      <div className="modal-header ">
        <div className="title">Board background</div>
        <button className="close-btn" onClick={onClose}>
          <img src="x.svg" />
        </button>
      </div>

      <h4 style={{ marginRight: 22, fontSize: 14, marginTop: 12 }}>Photos</h4>
      <section className="select-background-images wrap">
        {backgroundImagesImages.map((bg, index) => (
          <div
            key={index}
            className={`bg-image-option larger`}
            onClick={() => { changeBg(bg) }}
            style={{
              backgroundImage: `url(${bg.url})`,
              backgroundSize: "cover",
            }}
          >
            {bg.isSelected && <div className="checkmark"><img src="check-mark.svg" alt="" /></div>}
          </div>
        ))}
      </section>

      <h4 style={{ marginRight: 22, fontSize: 14, marginTop: 12 }}>Colors</h4>
      <section className="select-background-color wrap">
        {backgroundImagesColors.map((bg, index) => (
          <div
            key={index}
            className={`bg-image-option larger`}
            style={{
              backgroundImage: `url(${bg.url})`,
              backgroundSize: "cover",
            }}
            onClick={() => { changeBg(bg) }}
          >
            {bg.isSelected && <div className="checkmark"><img src="check-mark.svg" alt="" /></div>}
          </div>
        ))}
      </section>
    </div>
  )
}


