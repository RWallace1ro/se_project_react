import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

const Profile = ({
  onSelectedCard,
  onCardDelete,
  onAddNewItem,
  clothingItems,
  onCreateModal,
}) => (
  <div className="profile">
    <section className="profile__sidebar">
      <SideBar />
    </section>
    <section className="profile__clothes">
      <ClothesSection
        // sectionData={cards}
        onAddNewItem={onAddNewItem}
        onSelectedCard={onSelectedCard}
        onCardDelete={onCardDelete}
        clothingItems={clothingItems}
        onClick={onCreateModal}
      />
    </section>
  </div>
);

// const Profile = ({ onSelectedCard, onCreateModal, clothingItems }) => {
//   return (
//     <div className="profile">
//       <SideBar />
//     </div>
//   );
// };

export default Profile;
