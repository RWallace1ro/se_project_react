import React from "react";
import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

const Profile = ({
  onSelectedCard,
  onCardDelete,
  onAddNewItem,
  clothingItems,
  onCreateModal,
  cards,
}) => {
  const profileName = "Terrence Tegegne";

  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar profileName={profileName} />
      </section>
      <section className="profile__clothes">
        <ClothesSection
          sectionData={cards}
          onAddNewItem={onAddNewItem}
          onSelectedCard={onSelectedCard}
          onCardDelete={onCardDelete}
          clothingItems={clothingItems}
          onCreateModal={onCreateModal}
        />
      </section>
    </div>
  );
};

export default Profile;
