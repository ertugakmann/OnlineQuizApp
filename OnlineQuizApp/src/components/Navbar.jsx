import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import { Button, IconButton, InputBase, Menu, MenuItem } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [open, setOpen] = useState(false);

  const StyledToolBar = styled(Toolbar)({
    backgroundColor: "#365486",
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "7px",
    width: "40%",
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "20px",
    alignItems: "center",
  }));

  const StyledIconButton = styled(IconButton)({
    color: "white",
  });
  return (
    <AppBar sx={{ boxShadow: "none" }} position="fixed">
      <StyledToolBar>
        <Typography variant="h4" sx={{ display: { xs: "none", sm: "block" } }}>
          QUIZAPP
        </Typography>
        <Typography variant="h5" sx={{ display: { xs: "block", sm: "none" } }}>
          QUIZAPP
        </Typography>
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <StyledIconButton>
            <MenuIcon
              sx={{ display: { xs: "block", sm: "none" } }}
              onClick={(e) => setOpen(true)}
            />
          </StyledIconButton>
          <StyledIconButton
            sx={{ display: { xs: "none", sm: "block" } }}
            aria-label="add"
          >
            <AddIcon fontSize="large" />
          </StyledIconButton>
          <StyledIconButton sx={{ display: { xs: "none", sm: "block" } }}>
            <PersonIcon fontSize="large" />
          </StyledIconButton>
        </Icons>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        onClick={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>Create A Quiz</MenuItem>
        <MenuItem>Log out</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
