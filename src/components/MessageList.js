import { React, useState, useEffect } from "react";


export default function MessageList() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("https://chat-app-api-bk.web.app/messages")
      .then((res) => res.json())
      .then(setMessages)
      .catch(console.error);
  }, []);

  return (
    <>
      <div>
        {messages.map((item) => {
          const { message, id } = item;
          return <p key={id}>{message}</p>;
        })}
      </div>
    </>
  );
}
