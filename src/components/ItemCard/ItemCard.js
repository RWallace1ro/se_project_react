import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card">
      <div className="card__content">
        <p className="card__name name_frame">{item.name}</p>
        <div>
          <img
            src={item.imageUrl}
            className="card_image"
            alt={item.name}
            onclick={onSelectCard}
            // onClick={() => onSelectCard(item)}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
