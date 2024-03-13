import React, { useState } from "react";
import EditUniversity from "./EditUniversity";
import UniversityDetails from "../css/UniversityDetails.css";

const UniversityDetail = ({ university, onClose, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUniversity, setEditedUniversity] = useState({ ...university }); // Copy initial university data

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    onEdit(editedUniversity);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    // Reset edited university data to original values
    setEditedUniversity({ ...university });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update edited university data
    setEditedUniversity((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="form">
      <h2>{university.name}</h2>
      <p>Country: {university.country}</p>
      <p>
        Website: <a href={university.website}>{university.website}</a>
      </p>
      {!isEditing && (
        <div>
          <button onClick={onClose}>Close</button>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
      {isEditing && (
        <div>
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