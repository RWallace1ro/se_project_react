import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route, useHistory } from "react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal";
import api from "../../utils/api";
import Profile from "../Profile/Profile";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import { checkToken, signin, signup } from "../../utils/auth";
import CurrengtUserContext from "../../contexts/CurrentUserContext";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import ProtectedRoute from "../ProtectedRoute";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleProfileEdit = (name, avatar) => {
    const token = localStorage.getItem("jwt");
    return api
      .updateUser({ name, avatar }, token)
      .then((updatedUser) => {
        setCurrentUser(updatedUser.data);
      })
      .catch((err) => {
        console.log(err);
        throw new Error("Failed to update profile.  Please try again");
      });
  };

  const handleLogin = (email, password) => {
    signin(email, password)
      .then(({ token }) => {
        localStorage.setItem("jwt", token);
        setIsLoggedIn(true);
        return checkToken(token);
      })
      .then((user) => {
        setCurrentUser(user.data);
        setIsLoggedIn(true);
        closeActiveModal("");
        history.push("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRegister = (name, email, password, avatar) => {
    signup(name, avatar, email, password)
      .then(() => handleLogin(email, password))
      .catch((err) => {
        console.log(err);
      });
  };

  const closeActiveModal = () => setActiveModal("");

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
        closeActiveModal();
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
        closeActiveModal();
      })
      .catch((err) => console.log(err));
  };

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    if (!isLiked) {
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
    setIsLoggedIn(false);
    setCurrentUser(null);
    history.push("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((user) => {
          setCurrentUser(user.data);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
          setIsLoggedIn(false);
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
        closeActiveModal();
      }
    };
    document.addEventListener("keydown", handleEscapeClose);

    return () => {
      document.removeEventListener("keydown", handleEscapeClose);
    };
  }, [activeModal]);

  console.log(currentTemperatureUnit);

  return (
    <CurrengtUserContext.Provider value={currentUser}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header
          onCreateModal={() => setActiveModal("create")}
          onLogin={() => setActiveModal("log-in")}
          onRegister={() => setActiveModal("register")}
          isLoggedIn={isLoggedIn}
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
          <ProtectedRoute exact path="/profile">
            <Profile
              clothingItems={clothingItems}
              onSelectedCard={handleSelectedCard}
              onCardDelete={handleCardDelete}
              onCardLike={handleCardLike}
              onCreateModal={() => setActiveModal("create")}
              onSignOut={handleSignOut}
              handleCloseModal={() => setActiveModal("edit-profile")}
              isLoggedIn={isLoggedIn}
            />
          </ProtectedRoute>
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
        {activeModal === "preview" && selectedCard && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={closeActiveModal}
            handleCardDelete={handleCardDelete}
            onClick={handleCardDelete}
          />
        )}
        {activeModal === "edit-profile" && (
          <EditProfileModal
            handleCloseModal={closeActiveModal}
            isOpen={activeModal === "edit-profile"}
            onProfileEdit={handleProfileEdit}
          />
        )}
        {activeModal === "register" && (
          <RegisterModal
            handleCloseModal={closeActiveModal}
            isOpen
            onRegister={handleRegister}
            onSwitchToLogin={() => setActiveModal("log-in")}
          />
        )}
        {activeModal === "log-in" && (
          <LoginModal
            handleCloseModal={closeActiveModal}
            isOpen
            onLogin={handleLogin}
            onSwitchToRegister={() => setActiveModal("register")}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </CurrengtUserContext.Provider>
  );
}

export default App;
