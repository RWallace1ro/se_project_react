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
  cards,
}) => {
  const currentUser = useContext(CurrengtUserContext);
  const profileName = currentUser ? currentUser.name : "";
  // const profileName = "Terrence Tegegne";

  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar profileName={profileName} />
        <button type="button" className="profile_sign-out" onClick={onSignOut}>
          Sign Out
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
        />
      </section>
    </div>
  );
};

export default Profile;
