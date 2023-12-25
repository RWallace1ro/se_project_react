const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className={`modal`}>
      <div className="modal__content">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        ></button>

        <img
          src={selectedCard.link}
          alt="clothing"
          className="modal__popup-image"
        />

        <div className="modal__popup-text">{selectedCard.name}</div>
        <div className="modal__popup-text">Weather: {selectedCard.weather}</div>
      </div>
    </div>
  );
};

export default ItemModal;
