import { useContext, useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import api from "../../utils/api";
import "./EditProfileModal.css";

const EditProfileModal = ({ handleCloseModal, isOpen, onProfileEdit }) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser?.name || "");
  const [avatar, setAvatar] = useState(currentUser?.avatar || "");
  const [isFormValid, setIsFormValid] = useState(false);
  const [error, setError] = useState("");

  // const avatarUrl = currentUser?.avatar;

  useEffect(() => {
    if (isOpen) {
      setName(currentUser?.name || "");
      setAvatar(currentUser?.avatar || "");
    }
  }, [isOpen, currentUser]);

  useEffect(() => {
    const isValid = name && avatar;
    setIsFormValid(isValid);
  }, [name, avatar]);

  const handleSubmit = (e) => {
    e.prevenDefault();
    setError();
    const token = localStorage.getItem("jwt");
    api
      .updateUser({ name, avatar }, token)
      .then((updatedUser) => {
        // setCurrentUser(updatedUser);
        handleCloseModal();
        onProfileEdit(updatedUser);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to update profile.  Please try again");
      });
  };

  return (
    <ModalWithForm
      title="Change profile data"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText="Save changes"
      isFormValid={isFormValid}
    >
      {error && <div className="error-message">{error}</div>}
      <label className="modal__label">
        <p className="modal__text">Name*</p>
        <input
          className="modal__input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
      </label>
      <label className="modal__label">
        <p className="modal__text">Avatar URL*</p>
        <input
          className="modal__input"
          type="url"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          placeholder="Avatar URL"
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
