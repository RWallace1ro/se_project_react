import React, { useContext } from "react";
import CurrengtUserContext from "../../contexts/CurrentUserContext";
import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, handleCardDelete }) => {
  const currentUser = useContext(CurrengtUserContext);
  const isOwn = selectedCard.owner === currentUser?._id;
  const modalDeleteButtonClassname = `item__delete-button ${
    isOwn ? "item__delete-button_visible" : "item__delete-button_hidden"
  }`;

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
        {isOwn && (
          <button
            className={modalDeleteButtonClassname}
            type="buttom"
            onClick={handleDeleteClick}
          >
            Delete Item
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemModal;
