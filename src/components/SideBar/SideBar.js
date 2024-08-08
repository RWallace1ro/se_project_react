import React, { useContext } from "react";
import "./SideBar.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const SideBar = ({ profileName }) => {
  const currentUser = useContext(CurrentUserContext);

  const avatarUrl = currentUser?.avatar;

  return (
    <div className="sidebar">
      <div className="profile__info">
        <img src={avatarUrl} className="profile__image" alt="avatar" />
        <p className="profile__name">{profileName}</p>
      </div>
    </div>
  );
};

export default SideBar;
