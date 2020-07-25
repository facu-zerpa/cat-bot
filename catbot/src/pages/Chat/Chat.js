import React, { useState, useEffect } from "react";
import "./Chat.css";
import CatItem from "./components/CatItem/CatItem";
import UserItem from "./components/UserItem/UserItem";
import InputChat from "./components/InputChat/InputChat";
import Select from "./components/Select/Select";
import { doing, aboutMe, time, day } from "../../data/Actions";
import Fade from "react-reveal";

const Chat = ({ history }) => {
  let idCounter = 0;

  // State
  const [msg, setMsg] = useState({});
  const [chat, setChat] = useState([
    {
      id: 0,
      emitter: "Cat",
      msg: ["Hola", "Como es tu nombre?"],
    },
  ]);
  const [openSelect, setOpenSelect] = useState(false);
  const [interactions, setInteractions] = useState([]);

  const firstResponse = (name) => {
    let newChat = {
      id: idCounter + 2,
      emitter: "Cat",
      msg: [
        `Mucho gusto ${name}!`,
        `Mi nombre es Dimitry, soy catbot en desarrollo`,
        `Eso quiere decir que aun no estoy preparado para tus preguntas especificas :c`,
        `Lo que no significa que no podamos interactuar! c:`,
        `Haceme una pregunta de la lista, y con gusto te respondo!`,
      ],
    };
    if (newChat) {
      setChat([...chat, newChat]);
    }
  };

  useEffect(() => {
    if (chat.length === 2) {
      setTimeout(() => {
        firstResponse(msg.msg);
      }, 500);
      setMsg({ ...msg, msg: "" });
      setTimeout(() => {
        setOpenSelect(true);
      }, 600);
    }
  }, [chat]);

  const getMeMessage = (value) => {
    idCounter = idCounter + 1;
    setMsg({
      id: idCounter,
      emitter: "User",
      msg: value,
    });
  };

  const sendMessage = (e) => {
    e.preventDefault();
    setChat([...chat, msg]);
  };

  let options = [
    {
      id: "What are you doing?",
      text: "Que haces?",
    },
    {
      id: "Tell me about you",
      text: "Contame sobre vos",
    },
    {
      id: "What time is it?",
      text: "Que hora es?",
    },
    {
      id: "What day is it?",
      text: "Que dia es?",
    },
  ];

  const handleSelectedOptions = (value) => {
    let result;
    switch (value) {
      case "What are you doing?":
        result = doing[Math.floor(Math.random() * doing.length)];
        if (result) {
          setInteractions([...interactions, result.msg]);
        }
        break;
      case "Tell me about you":
        result = aboutMe[Math.floor(Math.random() * aboutMe.length)];
        if (result) {
          setInteractions([...interactions, result.msg]);
        }
        break;
      case "What time is it?":
        result = time[Math.floor(Math.random() * time.length)];
        console.log(result);
        if (result) {
          setInteractions([...interactions, result.msg]);
        }
        break;
      case "What day is it?":
        result = day[Math.floor(Math.random() * day.length)];
        if (result) {
          setInteractions([...interactions, result.msg]);
        }
        break;
      default:
        return;
    }
  };

  const handleOnClick = () => {
    history.push("/");
  };

  return (
    <div className="chatbot-chat-container">
      <div className="chatbot-chat-content">
        <div className="chatbot-chat">
          <div className="chatbot-chat-container-body">
            {chat.map((message, index) =>
              message.emitter === "Cat" ? (
                <Fade big>
                  <CatItem text={message.msg} key={index} />
                </Fade>
              ) : (
                <Fade big>
                  <UserItem text={message.msg} key={index} />
                </Fade>
              )
            )}
            {openSelect && (
              <Fade big>
                <Select
                  options={options}
                  handleSelectedOptions={handleSelectedOptions}
                />
              </Fade>
            )}
            {interactions.length > 0 &&
              interactions.map((interaction, index) => (
                <>
                  <Fade big>
                    <CatItem key={index} text={interaction}></CatItem>
                  </Fade>
                  <Fade big>
                    <Select
                      options={options}
                      handleSelectedOptions={handleSelectedOptions}
                    />
                  </Fade>
                </>
              ))}
          </div>
          <div className="chatbot-chat-container-input">
            <InputChat
              chat={chat}
              getMeMessage={getMeMessage}
              sendMessage={sendMessage}
              msg={msg}
            />
          </div>
        </div>
      </div>
      <div className="chatbot-cat-back">
        <button onClick={handleOnClick}>Inicio</button>
      </div>
    </div>
  );
};

export default Chat;
