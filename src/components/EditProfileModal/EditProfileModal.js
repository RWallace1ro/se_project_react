import { useContext, useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import api from "../../utils/api";
import "./EditProfileModal";

const EditProfileModal = ({ handleCloseModal, isOpen }) => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser?.name || "");
  const [avatar, setAvatar] = useState(currentUser?.avatar || "");
  const [isFormValid, setIsFormValid] = useState(false);

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
    api
      .updateUser({ name, avatar })
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        handleCloseModal("");
      })
      .catch((err) => console.log(err));
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
