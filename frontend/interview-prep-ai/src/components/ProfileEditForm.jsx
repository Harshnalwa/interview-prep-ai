import React, { useState, useContext } from "react";
import { UserContext } from "../context/userContext";
import ProfilePhotoSelector from "./Inputs/ProfilePhotoSelector";
import Input from "./Inputs/Input";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";
import uploadImage from "../utils/uploadImage";
import toast from "react-hot-toast";

const ProfileEditForm = ({ onClose }) => {
  const { user, updateUserProfile } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: user?.name || "",
  });
  
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(user?.profileImageUrl || null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      toast.error("Name is required");
      return;
    }

    setLoading(true);

    try {
      let profileImageUrl = user?.profileImageUrl;

      // Upload new image if selected
      if (profileImage) {
        const imageResponse = await uploadImage(profileImage);
        profileImageUrl = imageResponse.imageUrl;
      }

      // Update profile
      const response = await axiosInstance.put(API_PATHS.AUTH.UPDATE_PROFILE, {
        name: formData.name.trim(),
        profileImageUrl: profileImageUrl,
      });

      // Update user context
      updateUserProfile(response.data);
      
      toast.success("Profile updated successfully!");
      onClose();
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error(error.response?.data?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h2 className="text-xl font-semibold text-slate-100 mb-6 text-center">
        Edit Profile
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Profile Photo Selector */}
        <ProfilePhotoSelector
          image={profileImage}
          setImage={setProfileImage}
          preview={imagePreview}
          setPreview={setImagePreview}
        />

        {/* Name Input */}
        <Input
          type="text"
          name="name"
          label="Full Name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter your full name"
          required
        />

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-2.5 text-slate-300 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors duration-200 font-medium"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white rounded-lg transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading || !formData.name.trim()}
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEditForm;
