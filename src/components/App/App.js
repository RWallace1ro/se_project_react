// import logo from "./logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Main from "../../Main/Main";

function App() {
  const weatherTemp = "100°";
  return (
    <div>
      <Header />
      <Main weatherTemp={weatherTemp} />
      <footer className="footer">
        <div>Developed by Rochelle Wallace</div>
        <div>2023</div>
      </footer>
    </div>
  );
}

export default App;
