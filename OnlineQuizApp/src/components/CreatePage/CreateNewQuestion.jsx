import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import CreateQuiz from "./CreateQuiz";

function CreateNewQuestion() {
  const [question, setQuestion] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [showNewQuestion, setShowNewQuestion] = useState(false);

  const addNewQuestion = () => {
    setShowNewQuestion(true);
  };

  return (
    <Box>
      {showNewQuestion ? (
        <CreateQuiz a={a} b={b} question={question} />
      ) : (
        <Box sx={{ marginTop: 10, marginLeft: "auto" }}>
          <Typography mt={3} variant="h5" fontFamily={"Lato"}>
            Enter Your Question
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Enter Your Question Name..."
            variant="outlined"
            sx={{ marginTop: "20px" }}
            onChange={(e) => setQuestion(e.target.value)}
            value={question}
            fullWidth
          />
          <Typography mt={3} variant="h5" fontFamily={"Lato"}>
            Enter Your Option
          </Typography>
          <Box gap={2} display={"flex"}>
            <Typography mt={4} variant="h5">
              A)
            </Typography>
            <TextField
              id="outlined-basic"
              placeholder="Enter Your Option..."
              variant="outlined"
              sx={{ marginTop: "20px" }}
              onChange={(e) => setA(e.target.value)}
              value={a}
            />
            <Typography mt={4} variant="h5">
              B)
            </Typography>
            <TextField
              id="outlined-basic"
              placeholder="Enter Your Option..."
              variant="outlined"
              sx={{ marginTop: "20px" }}
              onChange={(e) => setB(e.target.value)}
              value={b}
            />
          </Box>

          <p>
            If you want to add more options, you can do it on the next page!
            (You have to add at least 2 options.)
          </p>

          <Box display={"flex"} justifyContent={"flex-end"}>
            <Button
              sx={{
                backgroundColor: "#365486",
                height: "35px",
                borderRadius: "10px",
                marginTop: "30px",
              }}
              variant="contained"
              onClick={addNewQuestion}
            >
              Let's Start
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default CreateNewQuestion;
