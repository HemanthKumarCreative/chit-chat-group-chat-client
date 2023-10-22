import React, { useState } from "react";
import GroupsList from "../components/GroupsList";
import Header from "../components/Header";
import Cookies from "js-cookie";
import { Container } from "@mui/material";
import ChatWindow from "../components/ChatWindow";
import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";

export default function ChatDetailedPage() {
  const userData = JSON.parse(Cookies.get("userInfo"));
  const [userInfo, setUserInfo] = useState(userData);
  console.log(userInfo);
  return (
    <div>
      <Header />
      <GroupsList />
      <Container
        sx={{
          marginLeft: "27vw",
          width: "73vw",
          height: "90vh",
          backgroundColor: "#d7d4ec66",
        }}
      >
        <ChatWindow />
      </Container>
    </div>
  );
}
