import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import CreateOption from "./CreateOption";
import { useState } from "react";
import CreateNewQuestion from "./CreateNewQuestion";

function CreateQuestion({ a, b, question }) {
  const [addQuestion, setAddQuestion] = useState(false);

  const handleAddQuestion = () => {
    setAddQuestion(true);
  };

  return (
    <Box>
      <Divider />
      <Box mt={"15px"}>
        <Typography mt={2} sx={{ textTransform: "uppercase" }} variant="h5">
          {question}
        </Typography>
        <Box mt={2} display={"flex"} gap={10}>
          <CreateOption handleAddQuestion={handleAddQuestion} a={a} b={b} />
        </Box>
        {addQuestion && (
          <Box>
            <CreateNewQuestion />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default CreateQuestion;
