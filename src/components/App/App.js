import "./App.css";
// import { Route, Routes } from "react-router-dom"
import Header from "../Header/Header";
import Main from "../Main/Main";
import { CurrentTemperatureUnitContext } from "./contexts/CurrentTemperatureUnitContext";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";

// import { Profile } from "../Profile/Profile";

function App() {
  // const weatherTemp = "100; F";
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleToggleSwitchChange = () => {};

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (!activeModal) return;
    const handleEscapeClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEscapeClose);
    return () => {
      document.removeEventListener("keydown", handleEscapeClose);
    };
  }, [activeModal]);

  return (
    <div>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header onCreateModal={handleCreateModal} />
        <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
        <Footer />
        {activeModal === "create" && (
          <ModalWithForm
            title="New garment"
            onClose={handleCloseModal}
            setActiveModal={setActiveModal}
          >
            <div className="modal__text-content">
              <label className="modal__label">
                <p className="modal__text">Name</p>
                <input
                  className="modal__input"
                  type="text"
                  name="name"
                  placeholder="Name"
                  minlenght="2"
                  maxlenght="30"
                />
              </label>
              <label className="modal__label">
                <p className="modal__text">Image</p>
                <input
                  className="modal__input"
                  type="url"
                  name="link"
                  placeholder="Image URL"
                  minlenght="1"
                  maxlenght="30"
                />
              </label>
              <p className="modal__text">Select the weather type:</p>
              <div>
                <div>
                  <label className="modal__temp-label">
                    <input
                      className="modal__radio-button"
                      type="radio"
                      id="hot"
                      name="temperature"
                      value="hot"
                    />
                    Hot
                  </label>
                </div>
                <div>
                  <label className="modal__temp-label">
                    <input
                      className="modal__radio-button"
                      type="radio"
                      id="warm"
                      name="temperature"
                      value="warm"
                    />
                    Warm
                  </label>
                </div>
                <div>
                  <label className="modal__temp-label">
                    <input
                      className="modal__radio-button"
                      type="radio"
                      id="cold"
                      name="temperature"
                      value="cold"
                    />
                    Cold
                  </label>
                </div>
              </div>
            </div>
          </ModalWithForm>
        )}
        {activeModal === "preview" && (
          <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
