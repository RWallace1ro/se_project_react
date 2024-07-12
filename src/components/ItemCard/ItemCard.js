import { useContext } from "react";
import "./ItemCard.css";
import CurrengtUserContext from "../../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectedCard, onCardLike }) => {
  const currentUser = useContext(CurrengtUserContext);
  const isLiked = item.likes.some((id) => id === currentUser._id);
  const itemLikeButtonClassName = `item_like-button ${
    isLiked ? "item__like-button_active" : ""
  }`;

  const handleLike = () => {
    onCardLike({ id: item._id, isLiked });
  };

  // const onCardClick = () => {
  //   onSelectedCard(item);
  // };

  return (
    <div className="card">
      <div className="card__content">
        <p className="card__name name_frame">{item.name}</p>
        <div>
          <img
            src={item.imageUrl}
            className="card_image"
            alt={item.name}
            // onClick={onCardClick}
            onClick={() => onSelectedCard}
          />
          {currentUser && (
            <button
              type="buttom"
              className={itemLikeButtonClassName}
              onClick={handleLike}
            ></button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
