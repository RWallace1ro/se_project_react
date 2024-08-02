import React, { useContext } from "react";
import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import CurrengtUserContext from "../../contexts/CurrentUserContext";

const Profile = ({
  onSelectedCard,
  onCardDelete,
  onAddNewItem,
  clothingItems,
  onCreateModal,
  onSignOut,
  handleCloseModal,
  cards,
  onCardLike,
}) => {
  const currentUser = useContext(CurrengtUserContext);

  if (!currentUser) {
    return null;
  }

  const userClothingItems = clothingItems.filter(
    (item) => item.owner === currentUser.data?._id
  );

  const profileName = currentUser ? currentUser.name : "";

  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar profileName={profileName} />
        <button
          type="button"
          className="profile__change-profile-data"
          onClick={handleCloseModal}
        >
          Change profile data
        </button>
        <button type="button" className="profile__sign-out" onClick={onSignOut}>
          Log out
        </button>
      </section>
      <section className="profile__clothes">
        <ClothesSection
          sectionData={cards}
          onAddNewItem={onAddNewItem}
          onSelectedCard={onSelectedCard}
          onCardDelete={onCardDelete}
          clothingItems={clothingItems}
          onCreateModal={onCreateModal}
          userClothingItems={userClothingItems}
          onCardLike={onCardLike}
        />
      </section>
    </div>
  );
};

export default Profile;
