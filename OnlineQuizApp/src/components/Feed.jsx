import React from "react";
import Quiz from "./Quiz";
import { Box, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";

function Feed() {
  return (
    <>
      <Box flex={5} p={2}>
        <Typography variant="h3" flexGrow={1} textAlign={"center"}>
          Popular Quizs
        </Typography>
        <Box mt={1} sx={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
          <Quiz />
          <Quiz />
          <Quiz />
          <Quiz />
          <Quiz />
          <Quiz />
        </Box>
      </Box>
    </>
  );
}

export default Feed;
