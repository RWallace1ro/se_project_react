import React, { useState } from "react";
// import { signup } from "../../auth/auth";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

const RegisterModal = ({
  handleCloseModal,
  isOpen,
  onRegister,
  onSwitchToLogin,
}) => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(name, email, password, avatar);
  };
  // const handleSubmit = (e) => {
  //   e.prevenDefault();
  //   signup(name, avatar, email, password)
  //     .then((res) => {
  //       handleCloseModal();
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <ModalWithForm
      title="Sign Up"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText="Sign Up"
      // isFormValid={isFormValid}
    >
      <label className="modal__label">
        <p className="modal__text">Email*</p>
        <input
          className="modal__input"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label className="modal__label">
        <p className="modal__text">Password*</p>
        <input
          className="modal__input"
          type="password"
          name="password"
          placeholder="Password"
          minLength="6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label className="modal__label">
        <p className="modal__text">Name*</p>
        <input
          className="modal__input"
          type="text"
          name="name"
          placeholder="Name"
          minLength="2"
          maxLength="30"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label className="modal__label">
        <p className="modal__text">Avatar URL*</p>
        <input
          className="modal__input"
          type="URL"
          name="avatar"
          placeholder="Avatar URL"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          required
        />
      </label>
      <div className="modal__switch-container">
        <span className="modal__switch-text">or</span>
        <a href="#" className="modal__switch-link" onClick={onSwitchToLogin}>
          Log In
        </a>
        {/* <button
          type="button"
          className="modal__switch-link"
          onClick={onSwitchToLogin}
        >
          Log In
        </button> */}
      </div>
    </ModalWithForm>
  );
};

{
  /* <button type="text">Sign up</button> */
}

export default RegisterModal;
