import { useState } from "react";
import { SiChatbot } from "react-icons/si";
import "../chatbot.css"

const ChatbotPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-icon" onClick={toggleChatbot}>
        <SiChatbot className="h-9 w-9 p-3 bg-white rounded-full fill-[#6d4fc2] cursor-pointer" />
      </div>
      {isOpen && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <h2 className="text-lg font-bold">Chat with us</h2>
            <button onClick={toggleChatbot} className="close-button">
              ✕
            </button>
          </div>
          <div className="chatbot-body">
            <p>How can we help you today?</p>
            <input
              type="text"
              placeholder="Type your message..."
              className="chatbot-input"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotPopup;
