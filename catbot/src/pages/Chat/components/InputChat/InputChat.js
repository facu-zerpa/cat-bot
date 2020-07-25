import React, { Fragment, useState } from "react";
import "./InputChat.css";
import Error from "../../../../assets/images/error.jpeg";

const InputChat = ({ getMeMessage, sendMessage, msg, chat }) => {
  const [error, setError] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (msg.msg === undefined) {
      setError(true);
    } else {
      sendMessage(e);
      setError(false);
    }
  };

  return (
    <Fragment>
      <form className="chatbot-chat-input-container" onSubmit={handleOnSubmit}>
        <input
          disabled={chat.length >= 3}
          placeholder={
            chat.length >= 3 ? "Ya no podes escribir" : "Escribi tu nombre"
          }
          type="text"
          value={msg.msg}
          onChange={(e) => getMeMessage(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      {error && (
        <div className="chatbot-cat-input-error">
          <img src={Error} alt="Error Icon" width="30px" />
          <small>Por favor ingresar un nombre.</small>
        </div>
      )}
    </Fragment>
  );
};

export default InputChat;
