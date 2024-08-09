import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({
  handleCloseModal,
  closeActiveModal,
  onAddItem,
  isOpen,
}) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [imageUrl, setUrl] = useState("");
  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  const [weather, setWeather] = useState("");
  const handleWeatherChange = (e) => {
    console.log(e.target.value);
    setWeather(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather });
  }

  useEffect(() => {
    if (isOpen) {
      setName("");
      setUrl("");
      setWeather("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="New garment"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      ActiveModal={closeActiveModal}
      buttonText="Add garment"
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
            name="imageUrl"
            placeholder="Image URL"
            minlenght="1"
            maxlenght="30"
            value={imageUrl}
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
                value="hot"
                name="weather"
                onChange={handleWeatherChange}
              />
              Hot
            </label>
          </div>
          <div>
            <label className="modal__temp-label">
              <input
                className="modal__radio-button"
                type="radio"
                value="warm"
                name="weather"
                onChange={handleWeatherChange}
              />
              Warm
            </label>
          </div>
          <div>
            <label className="modal__temp-label">
              <input
                className="modal__radio-button"
                type="radio"
                value="cold"
                name="weather"
                onChange={handleWeatherChange}
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
