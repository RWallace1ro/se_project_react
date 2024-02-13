import ItemCard from "../ItemCard/ItemCard";
import "../ClothesSection/ClothesSection.css";
import React from "react";

const ClothesSection = ({ onSelectedCard, clothingItems, onCreateModal }) => {
  return (
    <div className="profile__items">
      <div className="profile__your-items" type="text">
        <p>Your items</p>
        <div className="profile__new-clothes" type="text">
          <button
            type="text"
            className="profile__add-button"
            onClick={() => {
              onCreateModal();
            }}
          >
            + Add new
          </button>
        </div>
      </div>
      <div className="profile__clothes-section">
        {clothingItems.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            onSelectedCard={onSelectedCard}
            onClick={clothingItems}
          />
        ))}
      </div>
    </div>
  );
};

export default ClothesSection;
