import React from "react";
import profileAvatar from "../../images/profileAvatar.svg";
import "./SideBar.css";

const SideBar = ({ profileName }) => {
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
    </div>
  );
};

export default SideBar;
