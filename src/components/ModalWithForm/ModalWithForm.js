import React from "react";
import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText,
  title,
  onClose,
  name,
  onSubmit,
  isFormValid,
  isOpen,
}) => {
  if (!isOpen) return null;
  return (
    <div onClick={handleOverlayClick} className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        />
        <h3 className="modal__title">{title}</h3>
        <form className="modal__add-form" onSubmit={onSubmit}>
          {children}
          <button
            className="modal__add-form_buttom"
            type="submit"
            disabled={!isFormValid}
          >
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
