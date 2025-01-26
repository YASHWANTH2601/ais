import React from "react";
import "./ChatbotAi.css";
import Chatbot from "../Chatbot";
const ChatbotAi = () => {
  const [showChat, setShowChat] = React.useState(false);
  return (
    <div>
      {" "}
      {showChat ? (
        <div className="chatbot">
          <Chatbot onClose={() => setShowChat(false)} />
        </div>
      ) : (
        <button className="chat-widget" onClick={() => setShowChat(!showChat)}>
          {/* <div className="chat-bubble">Hi! What can I do for you?</div> */}
          <div className="chat-avatar">
            <img
              src="https://cdn.livechat-files.com/api/file/lc/img/9531830/747546ccb46efb88dc1514674d3b3287.png"
              alt="Chat Avatar"
            />
          </div>
        </button>
      )}
    </div>
  );
};

export default ChatbotAi;
