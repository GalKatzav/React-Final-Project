import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css"; // Import CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1>Universities Around the World</h1>
      <p>Presented by Gal Katzav</p>
      <Link to="/universities" className="btn">
        Search for Universities
      </Link>
      {/* Placeholder images */}
      <div className="image-grid">
        <img
          src={
            "https://pic1.calcalist.co.il/PicServer3/2018/10/31/857190/1BL.jpg"
          }
          alt="Harvard University"
          className="university-image"
        />
        <img
          src={
            "https://www.israelhayom.co.il/wp-content/uploads/2022/02/15747116173318_b.jpg"
          }
          alt="Columbia University"
          className="university-image"
        />
        <img
          src={"https://rotter.net/User_files/forum/658546082562772a1.jpg"}
          alt="Yale University"
          className="university-image"
        />
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/NYU07.JPG/1200px-NYU07.JPG"
          }
          alt="New York University"
          className="university-image"
        />
      </div>
    </div>
  );
};

export default Home;
