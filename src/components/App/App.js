import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom";
import AddItemModal from "../../AddItemModal/AddItemModal";
import api from "../../utils/api";
import Profile from "../Profile/Profile";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

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

  const addItem = (values) => {
    api
      .addItem(values)
      .then((item) => {
        setClothingItems([...clothingItems, item]);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const handleAddItemSubmit = (item) => {
    api
      .addItem(item)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleCardDelete = (selectedCard) => {
    api
      .deleteItem(selectedCard._id)
      .then(() => {
        setClothingItems((cards) =>
          cards.filter((c) => c._id !== selectedCard._id)
        );
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  // const handleCardDelete = (selectedCard) => {
  //   console.log(selectedCard);
  //   return onDeleteItem(selectedCard._id).then(() => {
  //     const newItemList = clothingItems.filter((item) => {
  //       return item._id !== selectedCard._id;
  //     });

  //     setClothingItems(newItemList);
  //   });
  // };

  // const handleDeleteItem = (e) => {
  //   e.preventDefault();
  //   api
  //     .deleteItem(selectedCard._id)
  //     .then(() => {
  //       const newItemList = clothingItems.filter((item) => {
  //         return item._id !== selectedCard._id;
  //       });

  //       setClothingItems(newItemList);
  //       handleCloseModal();
  //     })
  //     .catch((err) => console.log(err));
  // };

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
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header onCreateModal={handleCreateModal} />
        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              cards={clothingItems}
              onSelectCard={handleSelectedCard}
              onCardDelete={handleCardDelete}
              clothingItems={clothingItems}
            />
          </Route>
          <Route exact path="/profile">
            <Profile
              clothingItems={clothingItems}
              onSelectCard={handleSelectedCard}
              onCardDelete={handleCardDelete}
              onCreate={handleCreateModal}
              // onAddNewItem={() => setActiveModal("create")}
            />
          </Route>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            onAddItem={addItem}
            handleAddItemSubmit={handleAddItemSubmit}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            handleCardDelete={handleCardDelete}
          />
        )}
        {/* {activeModal === "delete" && (
          <DeleteItem
            onClose={handleCloseModal}
            deleteCard={handleCardDelete}
            // deleteItem={deleteItem}
            onCardDelete={handleDeleteItem}
          /> */}
        {/* )} */}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
