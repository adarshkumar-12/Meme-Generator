import React from "react";
import './App.css';
import troll from "../images/Troll Face.png";

const Header = () => {
    return (
      <div className="header">
          <img src={troll} alt="troll face"></img>
          <h2>Meme Generator</h2>
      </div>
    );
};

export default Header;