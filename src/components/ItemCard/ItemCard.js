import { useContext } from "react";
import "./ItemCard.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectedCard, onCardLike }) => {
  const currentUser = useContext(CurrentUserContext);
  const isLiked = item.likes.some((id) => id === currentUser?._id);
  const itemLikeButtonClassName = `item__like-button ${
    isLiked ? "item__like-button_active" : ""
  }`;

  const handleLike = () => {
    console.log("Like button clicked", item._id);
    onCardLike({ id: item._id, isLiked });
  };

  const onCardClick = () => {
    onSelectedCard(item);
  };

  return (
    <div className="card">
      <div className="card__content">
        <p className="card__name name__frame">{item.name}</p>
        <div>
          <img
            src={item.imageUrl}
            className="card__image"
            alt={item.name}
            // onClick={() => onSelectedCard(item)}
            onClick={onCardClick}
            // onClick={() => onSelectedCard}
          />
          {currentUser && (
            <button
              type="buttom"
              className={itemLikeButtonClassName}
              onClick={handleLike}
              aria-label={isLiked ? "unlike" : "like"}
            ></button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
