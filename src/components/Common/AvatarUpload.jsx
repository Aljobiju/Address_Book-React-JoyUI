import React from "react";
import { Avatar, Typography } from "@mui/joy";

const AvatarUpload = ({ image, setImage, allowUpload }) => {
  const handleImageReplace = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {allowUpload && (
        <input
          id="avatar-upload-input"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageReplace}
        />
      )}

      <Avatar
        src={image || undefined}
        sx={{ height: 120, width: 120 }}
        component="label"
        htmlFor="avatar-upload-input"
      />
    </>
  );
};

export default AvatarUpload;
