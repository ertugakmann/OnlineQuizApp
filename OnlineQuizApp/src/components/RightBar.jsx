import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteQuiz from "./FavoriteQuiz";

function RightBar() {
  return (
    <Box flex={1} paddingTop={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box>
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
        <Box marginTop={3} marginRight={1}>
          <FavoriteQuiz />
          <FavoriteQuiz />
          <FavoriteQuiz />
          <FavoriteQuiz />
          <FavoriteQuiz />
        </Box>
      </Box>
    </Box>
  );
}

export default RightBar;
