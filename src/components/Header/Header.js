import "./Header.css";
import logo from "../../images/logo.svg";

const Header = ({ onCreateModal }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>December 19, VA</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button type="text" className="add__clothes" onClick={onCreateModal}>
            +Add clothes
          </button>
        </div>
        <div>Terrence Tegegne</div>
        <div>
          <img src={require("../../images/avatar.svg").default} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
