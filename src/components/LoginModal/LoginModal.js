import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
// import { signin } from "../../auth/auth";
import "./LoginModal.css";

const LoginModal = ({
  handleCloseModal,
  isOpen,
  onSwitchToRegister,
  onLogin,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isFormValid, setIsFormValid] = useState(false);
  // const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
    // .then((res) => {
    //   localStorage.setItem("jwt", res.token);
    //   handleCloseModal();
    //   setIsFormValid("");
    // })
    // .catch((err) => {
    //   setError("Incorrect password");
    //   console.log(err);
    // });
  };

  return (
    <ModalWithForm
      title="Log In"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText="Log In"
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
      <div className="modal__switch-container">
        <span className="modal__switch-text">or</span>
        <a href="#" className="modal__switch-link" onClick={onSwitchToRegister}>
          Sign Up
        </a>
        {/* <button
          type="button"
          className="modal__switch-link"
          onClick={onSwitchToRegister}
        >
          Sign Up
        </button>
        Sign Up */}
      </div>
      {/* {error && <p className="modal__error-text">{error}</p>} */}
      {/* <p className="modal__switch-text">
        or{" "}
        <span className="modal__switch-link" onClick={handleRegister}>
          Sign Up
        </span>
      </p>  */}
    </ModalWithForm>
  );
};

{
  /* <button type="test">Log In</button> */
}

export default LoginModal;
