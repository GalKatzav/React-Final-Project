import React, { useState } from "react";
import EditUniversity from "./EditUniversity";

const UniversityDetail = ({ university, onClose, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUniversity, setEditedUniversity] = useState({ ...university });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    onEdit(editedUniversity);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedUniversity({ ...university });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUniversity((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="form-container">
      <h2>{university.name}</h2>
      <p>Country: {university.country}</p>
      <p>
        Website:{" "}
        {university.web_pages.map((url, index) => (
          <a key={index} href={url}>
            {url}
          </a>
        ))}
      </p>
      {!isEditing && (
        <div>
          <button onClick={onClose}>Close</button>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
      {isEditing && (
        <div className="form">
          <EditUniversity
            university={editedUniversity}
            onInputChange={handleInputChange}
          />
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default UniversityDetail;
