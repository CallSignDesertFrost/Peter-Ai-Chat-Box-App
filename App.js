import React, { useState } from "react";
import axios from "axios";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    const response = await axios.post("/api/message", { text: input });
    setMessages([...messages, { text: input, ai: response.data.text }]);
    setInput("");
  };

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            {message.text}
            {message.ai && <span> - AI: {message.ai}</span>}
          </li>
        ))}
      </ul>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;

require("dotenv").config();