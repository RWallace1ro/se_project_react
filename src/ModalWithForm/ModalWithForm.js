import React from "react";
import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  title,
  onClose,
  name,
}) => {
  return (
    <div onClick={handleOverlayClick} className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="modal__title">{title}</h3>
        <form className="modal__add-form">
          {children}
          <button className="modal__add-form_buttom" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

function handleOverlayClick(e) {
  if (e.target === e.currentTarget) {
  }
}

export default ModalWithForm;
