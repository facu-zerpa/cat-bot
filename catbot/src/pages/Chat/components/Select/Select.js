import React, { useRef, useEffect } from "react";
import "./Select.css";
import userAvatar from "../../../../assets/images/user.png";

const Select = ({ options, handleSelectedOptions }) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, options);

  return (
    <div className="select-container">
      <div className="select-content">
        {options.map((option, index) => (
          <div
            key={index}
            className="select-options"
            onClick={(e) => handleSelectedOptions(option.id)}
          >
            <label> {option.text} </label>
          </div>
        ))}
      </div>
      <img src={userAvatar} alt="User Avatar" />
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Select;
