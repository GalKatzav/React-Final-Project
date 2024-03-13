import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UniversityDetail from "../functions/UniversityDetail"; // Import UniversityDetail component
import EditUniversity from "../functions/EditUniversity"; // Import UniversityDetail component
import DeleteUniversity from "../functions/DeleteUniversity"; // Import UniversityDetail component
import "../css/Universities.css"; // Import CSS file for styling

const Universities = () => {
    const [universities, setUniversities] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [selectedUniversity, setSelectedUniversity] = useState(null);
  
    // Fetch universities data from API
    useEffect(() => {
      fetch("http://universities.hipolabs.com/search")
        .then(response => response.json())
        .then(data => {
          setUniversities(data);
          setLoading(false);
        })
        .catch(error => {
          console.log(error);
          setLoading(false);
        });
    }, []);
  
    // Filter universities based on search query
    const filteredUniversities = universities.filter(university =>
      university.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    // Function to handle university selection
    const handleUniversitySelect = university => {
      setSelectedUniversity(university);
    };
  
    // Function to handle clearing selected university
    const handleClearSelectedUniversity = () => {
      setSelectedUniversity(null);
    };
  
    // Function to handle editing a university
    const handleEdit = editedUniversity => {
      // Write logic to edit the university
      console.log("Editing university:", editedUniversity);
      // Once the editing is complete, you may want to update the universities state
      // Example: setUniversities(updatedUniversities);
    };
  
    // Function to handle deleting a university
    const handleDelete = id => {
      // Write logic to delete the university with the given id
      console.log("Deleting university with id:", id);
      // Once the deletion is complete, you may want to update the universities state
      // Example: setUniversities(updatedUniversities);
    };
  
    return (
      <div className="universities-container">
        <h1>Universities</h1>
        <Link to="/addUniversities" className="btn">Add University</Link>
  
        {/* Search input */}
        <input
          type="text"
          placeholder="Search universities..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
  
        {/* Display universities if data is loaded, otherwise show loading message */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {selectedUniversity ? (
              <UniversityDetail
                university={selectedUniversity}
                onClose={handleClearSelectedUniversity}
                onEdit={handleEdit} // Pass handleEdit function as a prop
                onDelete={handleDelete} // Pass handleDelete function as a prop
              />
            ) : (
              <ul className="universities-list">
                {filteredUniversities.map((university, index) => (
                  <li key={index} onClick={() => handleUniversitySelect(university)}>
                    {university.name}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    );
  };
  
  export default Universities;