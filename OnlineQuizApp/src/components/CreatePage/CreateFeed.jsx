import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import CreateQuestion from "./CreateQuestion";

function CreateFeed() {
  const [titleValue, setTitleValue] = useState("");
  const [question, setQuestion] = useState("")
  const [show, setShow] = useState(false);
  const [a, setA] = useState("")
  const [b, setB] = useState("")

  const handleStart = () => {
    if (titleValue !== "") {
      setShow(true);
    }
  };

  return (
    <Box
      sx={{ backgroundColor: { xs: "white", sm: "whitesmoke" } }}
      flex={5}
      p={2}
    >
      <Typography textAlign={"center"} variant="h3" fontFamily={"Lato"}>
        CREATE A QUIZ
      </Typography>
      <Card sx={{ minWidth: 500 }}>
        <CardContent>
          {show ? (
            <>
              <CreateQuestion a={a} b={b} question={question} titleValue={titleValue} />
            </>
          ) : (
            <>
              <Typography variant="h5" fontFamily={"Lato"}>
                Create a Quiz
              </Typography>
              <Box>
                <TextField
                  id="outlined-basic"
                  placeholder="Enter Your Quiz Name..."
                  variant="outlined"
                  sx={{ marginTop: "20px" }}
                  onChange={(e) => setTitleValue(e.target.value)}
                  value={titleValue}
                  fullWidth="fullWidth"
                />
                <Typography mt={3} variant="h5" fontFamily={"Lato"}>Enter Your Question</Typography>
                <TextField
                  id="outlined-basic"
                  placeholder="Enter Your Question Name..."
                  variant="outlined"
                  sx={{ marginTop: "20px" }}
                  onChange={(e) => setQuestion(e.target.value)}
                  value={question}
                  fullWidth="fullWidth"
                />
                <Typography mt={3} variant="h5" fontFamily={"Lato"}>Enter Your Option</Typography>
                <Box gap={2} display={"flex"}  >
                  <Typography mt={4}  variant="h5">A)</Typography>
                  <TextField
                  id="outlined-basic"
                  placeholder="Enter Your Option..."
                  variant="outlined"
                  sx={{ marginTop: "20px" }}
                  onChange={(e) => setA(e.target.value)}
                  value={a}
                />
                <Typography mt={4}  variant="h5">B)</Typography>
                  <TextField
                  id="outlined-basic"
                  placeholder="Enter Your Option..."
                  variant="outlined"
                  sx={{ marginTop: "20px" }}
                  onChange={(e) => setB(e.target.value)}
                  value={b}
                />
                
                </Box>
                
                <p>If you want to add more options,you can do it in next page!(You have to add least 2 options.)</p>
                
                <Box display={"flex"} justifyContent={"flex-end"}>
                 
                  <Button
                  sx={{
                    backgroundColor: "#365486",
                    height: "35px",
                    borderRadius: "10px",
                    marginTop: "30px",  
                  }}
                  variant="contained"
                  onClick={handleStart}
                > 
                  Let's Start
                </Button></Box>
                
              </Box>
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

export default CreateFeed;
