import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
// import { signin } from "../../auth/auth";
import "./LoginModal.css";
import { signin } from "../../auth/auth";

const LoginModal = ({
  handleCloseModal,
  isOpen,
  onSwitchToRegister,
  onLogin,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signin(email, password)
      .then((res) => {
        if (res.token) {
          onLogin(email, password);
        } else {
          setError("Incorrect passowrd");
        }
      })
      .catch((err) => {
        setError("Incorrect password");
        console.log(err);
      });
  };

  return (
    <ModalWithForm
      title="Log In"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText="Log In"
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
        {error && <p className="modal__error-text">{error}</p>}

        <input
          className={`modal__input ${error ? "error" : ""}`}
          type="password"
          name="password"
          placeholder="Password"
          minLength="6"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (error) setError("");
          }}
          required
        />
      </label>
      <div className="modal__switch-container">
        <span className="modal__switch-text">or</span>
        <a href="#" className="modal__switch-link" onClick={onSwitchToRegister}>
          Sign Up
        </a>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
