import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import ProfileDropdown from "../ProfileDropdown";
import Modal from "../Modal";
import ProfileEditForm from "../ProfileEditForm";

const ProfileInfoCard = () => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handelLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/");
  };

  const handleEditProfile = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    user && (
      <>
        <ProfileDropdown 
          user={user}
          onEditProfile={handleEditProfile}
          onLogout={handelLogout}
        />

        {/* Edit Profile Modal */}
        <Modal
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
          hideHeader
        >
          <ProfileEditForm onClose={closeEditModal} />
        </Modal>
      </>
    )
  );
};

export default ProfileInfoCard;
