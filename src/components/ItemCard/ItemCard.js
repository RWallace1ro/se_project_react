import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div>
      <div className="card">
        <div className="card__content">
          <div className="card__name">{item.name}</div>
          <div>
            <img
              src={item.link}
              className="card_image"
              onClick={() => onSelectCard(item)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
