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
  cards,
  onCardLike,
  isLoggedIn,
}) => {
  const currentUser = useContext(CurrengtUserContext);

  if (!currentUser) {
    return null;
  }

  const userClothingItems = clothingItems.filter(
    (item) => item.owner === currentUser._id
  );

  // const profileName = currentUser ? currentUser.name : "";
  const profileName = "Terrence Tegegne";

  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar profileName={profileName} />
        <button
          type="button"
          className="profile_sign-out"
          onClick={onSignOut}
        ></button>
      </section>
      <section className="profile__clothes">
        <ClothesSection
          sectionData={cards}
          onAddNewItem={onAddNewItem}
          onSelectedCard={onSelectedCard}
          onCardDelete={onCardDelete}
          clothingItems={clothingItems}
          onCreateModal={onCreateModal}
          userclothingItems={userClothingItems}
          onCardLike={onCardLike}
        />
      </section>
    </div>
  );
};

export default Profile;
