import ItemCard from "../ItemCard/ItemCard";
import "../ClothesSection/ClothesSection.css";

const ClothesSection = ({ onSelectCard, clothingItems, onCreateModal }) => {
  return (
    <div className="profile__items">
      <div className="profile__add-new" type="text">
        <p>Your items</p>
        <div className="profile__new-clothes" type="text">
          <button
            className="profile__add-button"
            type="text"
            onClick={onCreateModal}
          >
            + Add new
          </button>
        </div>
      </div>
      <div className="profile__clothes-section">
        {clothingItems.map((item) => (
          <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
        ))}
      </div>
    </div>
  );
};

export default ClothesSection;
