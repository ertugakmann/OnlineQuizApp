import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ClassIcon from "@mui/icons-material/Class";
import styled from "@emotion/styled";

function Sidebar() {
  const StyledList = styled(List)({
    marginBottom: "15px",
  });

  return (
    <Box
      flex={1}
      sx={{ display: { xs: "none", sm: "block" }, paddingTop: "15px" }}
    >
      <Box position="fixed">
        <Typography variant="h3">MY QUIZS</Typography>
        <StyledList sx={{ width: 300 }}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <ClassIcon />
              </ListItemIcon>
              <ListItemText primary="Quiz 1" />
            </ListItemButton>
          </ListItem>
        </StyledList>
        <StyledList sx={{ width: 300 }}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <ClassIcon />
              </ListItemIcon>
              <ListItemText primary="Quiz 2" />
            </ListItemButton>
          </ListItem>
        </StyledList>
        <StyledList sx={{ width: 300 }}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <ClassIcon />
              </ListItemIcon>
              <ListItemText primary="Quiz 3" />
            </ListItemButton>
          </ListItem>
        </StyledList>
        <StyledList sx={{ width: 300 }}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <ClassIcon />
              </ListItemIcon>
              <ListItemText primary="Quiz 4" />
            </ListItemButton>
          </ListItem>
        </StyledList>
        <StyledList sx={{ width: 300 }}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <ClassIcon />
              </ListItemIcon>
              <ListItemText primary="Quiz 5" />
            </ListItemButton>
          </ListItem>
        </StyledList>
        <StyledList sx={{ width: 300 }}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <ClassIcon />
              </ListItemIcon>
              <ListItemText primary="Quiz 6" />
            </ListItemButton>
          </ListItem>
        </StyledList>
        <StyledList sx={{ width: 300 }}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <ClassIcon />
              </ListItemIcon>
              <ListItemText primary="Quiz 7" />
            </ListItemButton>
          </ListItem>
        </StyledList>
        <StyledList sx={{ width: 300 }}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <ClassIcon />
              </ListItemIcon>
              <ListItemText primary="Quiz 8" />
            </ListItemButton>
          </ListItem>
        </StyledList>
      </Box>
    </Box>
  );
}

export default Sidebar;
