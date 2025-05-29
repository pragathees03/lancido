import React, { useState } from "react";
import "./ChatBox.css"; 

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [messages, setMessages] = useState([
    { text: "Hello! Welcome to Lancido..", sender: "bot" },
  ]); 
  const [inputText, setInputText] = useState("");

 
  const toggleChatBox = () => {
    setIsOpen(!isOpen);
  };

  
  const handleSendMessage = () => {
    if (inputText.trim() === "") return;

   
    setMessages([...messages, { text: inputText, sender: "user" }]);
    setInputText("");

  
    setTimeout(() => {
      const botResponse = getBotResponse(inputText);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, sender: "bot" },
      ]);
    }, 500);
  };


  const getBotResponse = (userInput) => {
    const command = userInput.toLowerCase();
    switch (command) {
        case "praga":
            return "Pragathees is the founder of Lancido. He is a developer and designer.";
        case "hi":
            return "Hey! How can i help you? ";
            return " You can ask for 'help', 'pricing', 'contact', 'services'";
            case "hello":
               return "Hey! How can i help you?, You can ask for 'help', 'pricing', 'contact', 'services' ";
      case "help":
        return "Here are some commands you can use: 'help', 'pricing', 'contact', 'services'.";
      case "pricing":
        return "Our pricing starts at Rs.500/Day for freelancing.";
      case "contact":
        return "You can contact us at lancido.contact.com.";
      case "services":
        return "We offer services like web development, graphic design, and video editing.";
      default:
        return "I'm sorry, I didn't understand that. Type 'help' for a list of commands.";
    }
  };

  return (
    <div>
      
      <button
  onClick={() => {
    
    console.log("Logo button clicked!");
  }}
  style={{ background: "none", border: "none", cursor: "pointer" }} // Remove default button styles
>
  <img src="logo.png" alt="Lancido Logo" className="chat-toggle-btn" onClick={toggleChatBox} />
</button>

     
      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <span>Chat Here!</span>
            <button className="close-btn" onClick={toggleChatBox}>
              &times;
            </button>
          </div>
          <div className="chat-body">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.sender === "user" ? "user-message" : "bot-message"}`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type a command..."
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button onClick={handleSendMessage} >Send </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;