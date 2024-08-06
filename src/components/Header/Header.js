import React, { useContext } from "react";
import logo from "../../images/logo.svg";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const Header = ({ onCreateModal, onLogin, onRegister }) => {
  const currentUser = useContext(CurrentUserContext);
  const isLoggedIn = !!currentUser;
  console.log("Logged In");

  const avatarUrl = currentUser?.avatar;
  // || "path/to/defaultAvatar.svg";

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div>July 28, VA</div>
      </div>
      <div className="header__right-section">
        <ToggleSwitch />
        {isLoggedIn && (
          <button
            type="text"
            className="add__clothes"
            onClick={() => {
              onCreateModal();
            }}
          >
            +Add clothes
          </button>
        )}
        {isLoggedIn ? (
          <Link to="/profile" className="header__profile">
            <div className="header__username-avatar">
              <div className="header__username">{currentUser.name}</div>
              {currentUser.avatar ? (
                <img
                  src={avatarUrl}
                  alt="avatar"
                  className="header__avatar-image"
                />
              ) : (
                <div className="header__avatar-placeholder">
                  {currentUser.name[0].toUpperCase()}
                </div>
              )}
            </div>
          </Link>
        ) : (
          <>
            <button type="button" className="log__in-form" onClick={onLogin}>
              Log In
            </button>
            <button
              type="button"
              className="sign__up-form"
              onClick={onRegister}
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
