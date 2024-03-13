import React, { useState } from "react";

const EditUniversity = ({ university, onSave, onCancel }) => {
  const [editedUniversity, setEditedUniversity] = useState({ ...university });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUniversity({ ...editedUniversity, [name]: value });
  };

  const handleSubmit = () => {
    onSave(editedUniversity);
  };

  return (
    <div>
      <h2>Edit University</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={editedUniversity.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Country:
        <input
          type="text"
          name="country"
          value={editedUniversity.country}
          onChange={handleChange}
        />
      </label>
      <label>
        Website:
        <input
          type="text"
          name="website"
          value={editedUniversity.website}
          onChange={handleChange}
        />
      </label>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditUniversity;
