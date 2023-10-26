import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ShowInvitationsPage from "./pages/ShowInvitationsPage";
import ChatDetailedPage from "./pages/ChatDetailedPage";
import CreateNewGroupPage from "./pages/CreateNewGroupPage";
import Cookies from "js-cookie";

const AuthRoute = ({ element, authenticated }) => {
  return authenticated ? element : <Navigate to="/" />;
};

const App = () => {
  const [groups, setGroups] = useState([]);
  const cookie = Cookies.get("userInfo");
  let authenticated = cookie !== undefined;
  let userData = {};
  if (cookie) {
    userData = JSON.parse(cookie);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={authenticated ? <Navigate to="/home" /> : <LoginPage />}
        />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/home"
          element={
            <AuthRoute
              authenticated={authenticated}
              element={
                <HomePage
                  groups={groups}
                  setGroups={setGroups}
                  userId={userData.userId}
                  userName={userData.userName}
                />
              }
            />
          }
        />
        <Route
          path="/create-new-group"
          element={
            <AuthRoute
              authenticated={authenticated}
              element={
                <CreateNewGroupPage
                  groups={groups}
                  setGroups={setGroups}
                  userId={userData.userId}
                  userName={userData.userName}
                />
              }
            />
          }
        />
        <Route
          path="/show-invitations"
          element={
            <AuthRoute
              authenticated={authenticated}
              element={
                <ShowInvitationsPage
                  groups={groups}
                  setGroups={setGroups}
                  recieverId={userData.userId}
                  userName={userData.userName}
                />
              }
            />
          }
        />
        <Route
          path="/group-detailed-page/:groupId"
          element={
            <AuthRoute
              authenticated={authenticated}
              element={
                <ChatDetailedPage
                  groups={groups}
                  setGroups={setGroups}
                  userId={userData.userId}
                  userName={userData.userName}
                />
              }
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
