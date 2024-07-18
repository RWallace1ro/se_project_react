import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal";
import api from "../../utils/api";
import Profile from "../Profile/Profile";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import { checkToken } from "../../auth/auth";
// import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import CurrengtUserContext from "../../contexts/CurrentUserContext";
import LoadingIndicator from "../LoadingIndicator/Loadingindicator";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setActiveModal("log-in");
  };

  const handleRegister = () => {
    setActiveModal("register");
  };

  const closeActiveModal = () => {
    {
      setActiveModal("close");
    }
  };

  // const handleCreateModal = () => {
  //   setActiveModal("create");
  // };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const addItem = (values) => {
    const token = localStorage.getItem("jwt");
    setIsLoading(true);
    api
      .addItem(values, token)
      .then((item) => {
        setClothingItems([...clothingItems, item]);
        handleCloseModal();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleCardDelete = (selectedCard) => {
    const token = localStorage.getItem("jwt");
    api
      .deleteItem(selectedCard._id, token)
      .then(() => {
        setClothingItems((cards) =>
          cards.filter((card) => card._id !== selectedCard._id)
        );
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    if (isLiked) {
      api
        .addCardLike(id, token)
        .then((updatedCard) => {
          setClothingItems((cards) =>
            cards.map((item) => (item._id === id ? updatedCard : item))
          );
        })
        .catch((err) => console.log(err));
    } else {
      api
        .removeCardLike(id, token)
        .then((updatedCard) => {
          setClothingItems((cards) =>
            cards.map((item) => (item._id === id ? updatedCard : item))
          );
        })
        .catch((err) => console.log(err));
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    // setIsLoggedIn(false);
    setCurrentUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((user) => {
          setCurrentUser(user);
          // setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
          // setIsLoggedIn(false);
        });
    }
  }, []);

  useEffect(() => {
    api
      .getItemList()
      .then((items) => {
        setClothingItems(items);
      })
      .catch((err) => console.log(err));
  }, []);

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

  console.log(currentTemperatureUnit);

  return (
    <div>
      <CurrengtUserContext.Provider value={currentUser}>
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          {/* <Header onCreateModal={handleCreateModal} /> */}
          <Header
            onCreateModal={() => setActiveModal("create")}
            onLogin={handleLogin}
            onRegister={handleRegister}
          />
          <Switch>
            <Route exact path="/">
              <Main
                weatherTemp={temp}
                cards={clothingItems}
                onSelectedCard={handleSelectedCard}
                onCardDelete={handleCardDelete}
                onCardLike={handleCardLike}
                clothingItems={clothingItems}
              />
            </Route>
            <Route exact path="/profile">
              <Profile
                clothingItems={clothingItems}
                onSelectedCard={handleSelectedCard}
                onCardDelete={handleCardDelete}
                // onCreateModal={handleCreateModal}
                onCardLike={handleCardLike}
                onCreateModal={() => setActiveModal("create")}
                onSignOut={handleSignOut}
              />
            </Route>
          </Switch>
          <Footer />
          {isLoading && <LoadingIndicator />}
          {activeModal === "create" && (
            <AddItemModal
              handleCloseModal={closeActiveModal}
              isOpen={activeModal === "create"}
              onAddItem={addItem}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              handleCardDelete={handleCardDelete}
              onClick={handleCardDelete}
            />
          )}
          {activeModal === "register" && (
            <RegisterModal handleCloseModal={handleCloseModal} isOpen />
          )}
          {activeModal === "log-in" && (
            <LoginModal handleCloseModal={handleCloseModal} isOpen />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </CurrengtUserContext.Provider>
    </div>
  );
}

export default App;
