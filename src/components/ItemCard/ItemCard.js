import "./ItemCard.css";

const ItemCard = ({ item, onSelectedCard }) => {
  const onCardClick = () => {
    onSelectedCard(item);
  };

  return (
    <div className="card">
      <div className="card__content">
        <p className="card__name name_frame">{item.name}</p>
        <div>
          <img
            src={item.imageUrl}
            className="card_image"
            alt={item.name}
            onClick={onCardClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
