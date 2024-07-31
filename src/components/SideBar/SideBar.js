import React, { useContext } from "react";
// import profileAvatar from "../../images/profileAvatar.svg";
import "./SideBar.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const SideBar = ({ profileName }) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <div className="profile__info">
        <img
          src={currentUser.avatar}
          alt="Profile-avatar"
          className="profile-image"
        />
        {/* <img
          src={profileAvatar}
          className="Profile__image"
          alt="Profile-avatar"
        /> */}
        <p className="profile__name">{profileName}</p>
      </div>
    </div>
  );
};

export default SideBar;
