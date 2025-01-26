import React from "react";
import { FiMinus } from "react-icons/fi";
import { IoSend } from "react-icons/io5";
import "./Chatbot.css";
const Chatbot = ({ onClose }) => {
  return (
    <div className="chatbotContainer">
      <div className="chatbotHeader">
        <button className="chatbotClose" onClick={onClose}>
          <FiMinus size={20} />
        </button>
      </div>
      <div>
        <h1>Live Chat</h1>
        <div className="chatbotBody">
          <div className="chatbotMessage">
            <img
              className="chatbotAvatar"
              src="https://cdn.livechat-files.com/api/file/lc/img/9531830/747546ccb46efb88dc1514674d3b3287.png"
              alt="Chat Avatar"
            />
            <div style={{ marginLeft: "10px", textAlign: "left" }}>
              <p>Moster Bot</p>
              <p>Hi</p>
            </div>
          </div>
          <button className="chatbotButton">
            Chat now <IoSend size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
