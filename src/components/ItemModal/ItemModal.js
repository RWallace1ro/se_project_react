import React from "react";
import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, handleCardDelete }) => {
  const handleDeleteClick = () => {
    handleCardDelete(selectedCard);
  };
  return (
    <div className={`modal`}>
      <div className="modal__content">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        ></button>

        <img
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
          className="modal__popup-image"
        />

        <div className="modal__popup-text">{selectedCard.name}</div>
        <div className="modal__popup-text">Weather: {selectedCard.weather}</div>
        <button
          className="modal__delete-button"
          type="buttom"
          onClick={handleDeleteClick}
        >
          Delete Item
        </button>
      </div>
    </div>
  );
};

export default ItemModal;
