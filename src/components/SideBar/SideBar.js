import profileAvatar from "../../images/profileAvatar.svg";
import "./SideBar.css";

const SideBar = ({ onselectedCard }) => {
  return (
    <div className="sidebar">
      <div className="profile__info">
        <img
          src={profileAvatar}
          className="Profile__image"
          alt="Profile-avatar"
        />
        <div>
          <p className="profile__name">Terrence Tegegne</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
