import React from "react";

const DeleteUniversity = ({ university, onDelete }) => {
  const handleDelete = () => {
    onDelete(university.id);
  };

  return (
    <div>
      <h2>Delete University</h2>
      <p>Are you sure you want to delete {university.name}?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteUniversity;
