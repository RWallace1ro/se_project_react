import React, { useContext } from "react";
import "./SideBar.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const SideBar = ({ profileName }) => {
  const currentUser = useContext(CurrentUserContext);

  const avatarUrl = currentUser?.avatar;
  //  || "path/to/defaultAvatar.svg";

  return (
    <div className="sidebar">
      <div className="profile__info">
        <img src={avatarUrl} alt="Profile-avatar" className="profile__image" />

        <p className="profile__name">{profileName}</p>
      </div>
    </div>
  );
};

export default SideBar;
