import React from "react";
import { Typography, Box } from "@mui/material";
import CreateQuestion from "./CreateQuestion";

function CreateQuiz({ a, b, titleValue, question }) {
  return (
    <Box>
      <Typography variant="h4">{titleValue}</Typography>
      <Box mt={5}>
        <CreateQuestion a={a} b={b} question={question} />
      </Box>
    </Box>
  );
}

export default CreateQuiz;
