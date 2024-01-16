import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ClassIcon from "@mui/icons-material/Class";
import styled from "@emotion/styled";
import React from "react";

function MyQuiz() {
  const StyledList = styled(List)({
    marginBottom: "15px",
    width: "225px",
  });

  return (
    <Box flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
      <StyledList>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <ClassIcon />
            </ListItemIcon>
            <ListItemText primary="Quiz 1" />
          </ListItemButton>
        </ListItem>
      </StyledList>
    </Box>
  );
}

export default MyQuiz;
