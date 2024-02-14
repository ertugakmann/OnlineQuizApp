import React from "react";
import Quiz from "./Quiz";
import { Box, Typography } from "@mui/material";

function Feed() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "whitesmoke",
          justifyContent: "center",
        }}
        p={2}
      >
        <Typography variant="h3" textAlign={"center"}>
          Popular Quizs
        </Typography>
        <Box
          mt={1}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
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
