"use client";
import { useState, useEffect } from "react";
import BasicCard from "./BasicCard";
import axios from "axios";

function MessagesTab() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMessages = () => {
      axios
        .get("http://localhost:5000/api/v1/message")
        .then((response) => {
          setMessages(response?.data?.messages);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getMessages();
  }, []);
  return (
    <div className="flex gap-3 flex-wrap p-4 absolute top-10">
      {messages.map((message) => {
        return <BasicCard data={message} />;
      })}
    </div>
  );
}

export default MessagesTab;
