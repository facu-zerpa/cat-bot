import React from "react";
import "./CatItem.css";
import catAvatar from "../../../../assets/images/cat.jpeg";

const CatItem = ({ text }) => {
  return (
    <div className="cat-item-container">
      <img src={catAvatar} alt="Cat Avatar" />
      <div className="cat-item-messages">
        {text.map((msg, index) => (
          <label key={index}> {msg} </label>
        ))}
      </div>
    </div>
  );
};

export default CatItem;
