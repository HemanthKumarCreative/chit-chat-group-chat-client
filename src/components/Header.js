import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Header = ({ userName }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("userInfo");
    navigate("/");
  };

  const createNewGroup = () => {
    navigate("/create-new-group");
  };

  const showInvitations = () => {
    navigate("/show-invitations");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#d7d4ec66" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" component="div">
          CHIT CHAT
        </Typography>
        <Typography variant="h6" component="div" color="green">
          {`Welcome, ${userName}`}
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="success" variant="outlined" onClick={createNewGroup}>
            Create New Group
          </Button>
          <Button color="success" variant="outlined" onClick={showInvitations}>
            Show Invitations
          </Button>
          <Button color="secondary" variant="outlined" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
