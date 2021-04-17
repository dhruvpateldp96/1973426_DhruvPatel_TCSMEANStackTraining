import { Input } from "antd";
import axios from "axios";
import React, { useEffect } from "react";
import socketIOClient from "socket.io-client";

const ChatApp = () => {
  const socket = socketIOClient("http://localhost:4100", {
    transport: ["websocket"],
  });

  useEffect(() => {
    console.log("Inside effec");
    socket.on("connection", (data) => {
      console.log("SOCKET CONNECTED");
    });
  }, []);

  return (
    <div>
      <Input
        onChange={(e) => {
          socket.emit("dash", e.target.value);
        }}
      />
    </div>
  );
};

export default ChatApp;
