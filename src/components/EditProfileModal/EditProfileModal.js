import { useContext, useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from ;
import api from "../../utils/api";

const EditProfileModal = ({ handleCloseModal, isOpen }) => {
  const currentUser = useContext(CurrengtUserContext);
  const [name, setName] = useState(currenUser?.name || "");
  const [avatar, setAvatar] = useState(currentUser?.avatar || "");

  useEffect(() => {
    if (isOpen) {
      setName(currentUser?.name || "");
      setAvatar(currentUser?.avatar || "");
    }
  }, [isOpen, currentUser]);

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
    >
      //Remember to enter form information
    </ModalWithForm>
  );
};

export default EditProfileModal;
