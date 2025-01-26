import React from "react";
import "./Footer.css";
import Chatbot from "../Chatbot";

export default function Footer() {
  const [showChat, setShowChat] = React.useState(false);
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BDlSsXKiUAoSNshECPqqvZK72sk95m.png"
            alt="Om Logo"
            className="logo"
          />
          <p className="logo-text">
            It is a long established fact that a reader will be a distracted.
          </p>
        </div>

        <div className="footer-contact">
          <h3>CONTACT US</h3>
          <div className="contact-info">
            <p>
              <span>📞</span> (+652)2584 6589
            </p>
            <p>
              <span>✉️</span> hindu@gmail.com
            </p>
            <p>
              <span>📍</span> Apt. 417 Cleopatra Curve
            </p>
            <p className="address-line">VT 91019-2349</p>
          </div>
        </div>

        <div className="footer-info">
          <h3>INFO</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h3>NEWSLETTER</h3>
          <div className="newsletter-input">
            <input type="email" placeholder="Email" />
            <button type="submit">➤</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p style={{ margin: "0px" }}>
          © 2025 - All Rights Reserved | Created By code4rest
        </p>
      </div>
    </footer>
  );
}

// {showChat ? (
//   <div className="chatbot">
//     <Chatbot onClose={() => setShowChat(false)} />
//   </div>
// ) : (
//   <button className="chat-widget" onClick={() => setShowChat(!showChat)}>
//     {/* <div className="chat-bubble">Hi! What can I do for you?</div> */}
//     <div className="chat-avatar">
//       <img
//         src="https://cdn.livechat-files.com/api/file/lc/img/9531830/747546ccb46efb88dc1514674d3b3287.png"
//         alt="Chat Avatar"
//       />
//     </div>
//   </button>
// )}
