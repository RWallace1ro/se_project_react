import React from "react";
import profileAvatar from "../../images/profileAvatar.svg";
import "./SideBar.css";

const SideBar = ({ profileName, onSignOut, handleCloseModal }) => {
  return (
    <div className="sidebar">
      <div className="profile__info">
        <img
          src={profileAvatar}
          className="Profile__image"
          alt="Profile-avatar"
        />
        <p className="profile__name">{profileName}</p>
      </div>
      <button
        type="button"
        className="profile__change-profile-data"
        onClick={handleCloseModal}
      >
        Change progfile data
      </button>
      <button type="button" className="profile__sign-out" onClick={onSignOut}>
        Log out
      </button>
    </div>
  );
};

export default SideBar;
