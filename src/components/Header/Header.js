import React, { useContext } from "react";
import logo from "../../images/logo.svg";
import "./Header.css";
import avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const Header = ({ onCreateModal, onLogin, onRegister }) => {
  const currentUser = useContext(CurrentUserContext);
  const isLoggedIn = !!currentUser;
  console.log("Logged In");
  const userInitial =
    isLoggedIn && currentUser.name ? currentUser.name[0].toUpperCase() : "";

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div>July 24, VA</div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        <div>
          <button
            type="text"
            className="add__clothes"
            onClick={() => {
              onCreateModal();
            }}
          >
            +Add clothes
          </button>
          {isLoggedIn ? (
            <Link to="/profile">
              {currentUser.name}
              <div className="header__avatar">
                {currentUser.avatar ? (
                  <img src={currentUser.avatar} alt="avatar" />
                ) : (
                  <div className="header__avatar-placeholder">
                    {userInitial}
                  </div>
                )}
              </div>
            </Link>
          ) : (
            <>
              <button type="button" onClick={onLogin}>
                Log In
              </button>
              <button type="button" onClick={onRegister}>
                Sign Up
              </button>
            </>
          )}
        </div>
        <div>
          <img src={avatar} alt="avatar" />
        </div>
        {/* <Link to="/profile">Name</Link> */}
        {/* <div> 
          <img src={avatar} alt="avatar" />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
