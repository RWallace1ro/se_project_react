import { useContext, useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import api from "../../utils/api";
import "./EditProfileModal.css";

const EditProfileModal = ({ handleCloseModal, isOpen }) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currenUser?.name || "");
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
        handleCloseModal("");
        setCurrentUser(updatedUser);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ModalWithForm
      title="Edit Profile"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText="Save"
      isFormValid={isFormValid}
    >
      <label classname="modal__label">
        Name*
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
      </label>
      <label classname="modal__label">Name*</label> Avatar URL*
      <input
        type="url"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
        placeholder="Avatar URL"
        required
      />
    </ModalWithForm>
  );
};

export default EditProfileModal;
