import "./Header.css";
//import WeatherCard from "../../WeatherCard/WeatherCard";

const Header = ({ onCreateModal }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../../images/logo.svg").default} alt="logo" />
        </div>
        <div>Date</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button type="text" onClick={onCreateModal}>
            Add New Clothes
          </button>
        </div>
        <div>Terrence Tegegne</div>
        <div>
          <img src="../../images/avatar.svg" alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
