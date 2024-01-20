import React, { useState } from "react";
import ModalWithForm from "../components/ModalWithForm/ModalWithForm";

const AddItemModal = ({
  handleCloseModal,
  setActiveModal,
  onAddItem,
  isOpen,
}) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [link, setUrl] = useState("");
  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     onAddItem({ name, link, temperature });
  //   };

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem({ name, link, temperature });
  }

  const [temperature, setTemperature] = useState("");
  const handleTempChange = (e) => {
    console.log(e.target.value);
    setTemperature(e.target.value);
  };

  return (
    <ModalWithForm
      title="New garment"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      setActiveModal={setActiveModal}
    >
      <div className="modal__text-content">
        <label className="modal__label">
          <p className="modal__text">Name</p>
          <input
            className="modal__input"
            type="text"
            name="name"
            placeholder="Name"
            minlenght="2"
            maxlenght="30"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label className="modal__label">
          <p className="modal__text">Image</p>
          <input
            className="modal__input"
            type="url"
            name="link"
            placeholder="Image URL"
            minlenght="1"
            maxlenght="30"
            value={link}
            onChange={handleUrlChange}
          />
        </label>
        <p className="modal__text">Select the weather type:</p>
        <div>
          <div>
            <label className="modal__temp-label">
              <input
                className="modal__radio-button"
                type="radio"
                id="hot"
                name="temperature"
                value={temperature}
                onChange={handleTempChange}
              />
              Hot
            </label>
          </div>
          <div>
            <label className="modal__temp-label">
              <input
                className="modal__radio-button"
                type="radio"
                id="warm"
                name="temperature"
                value={temperature}
                onChange={handleTempChange}
              />
              Warm
            </label>
          </div>
          <div>
            <label className="modal__temp-label">
              <input
                className="modal__radio-button"
                type="radio"
                id="cold"
                name="temperature"
                value={temperature}
                onChange={handleTempChange}
              />
              Cold
            </label>
          </div>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
