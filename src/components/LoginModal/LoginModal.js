import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { signin } from "../components/auth";

const LoginModal = ({ handleCloseModal, isOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.prevenDefault();
    signin(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        handleCloseModal;
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
      {error && <p className="modal__error-text">{error}</p>}
      <p className="modal__switch-text">
        or{" "}
        <span className="modal__switch-link" onClick={handleRegister}>
          Sign Up
        </span>
      </p>
    </ModalWithForm>
  );
};

export default LoginModal;