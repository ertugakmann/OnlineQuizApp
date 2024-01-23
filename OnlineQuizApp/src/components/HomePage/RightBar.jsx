import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteQuiz from "./FavoriteQuiz";
import styled from "@emotion/styled";

function RightBar() {
  const StyledRightBar = styled(Box)({
    flex: "1",
    paddingTop: "2px",
    display: { xs: "none", sm: "block" },
  });

  return (
    <StyledRightBar>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Typography display="flex" justifyContent="center" variant="h4">
          Favorite Quizs
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {/* This box true there?*/}

          <Avatar
            sx={{
              bgcolor: "red",
            }}
          >
            <FavoriteIcon />
          </Avatar>
        </Box>
        <Box marginTop={3}>
          <FavoriteQuiz />
          <FavoriteQuiz />
          <FavoriteQuiz />
          <FavoriteQuiz />
          <FavoriteQuiz />
        </Box>
      </Box>
    </StyledRightBar>
  );
}

export default RightBar;
