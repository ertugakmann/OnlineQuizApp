import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import CreateQuiz from "./CreateQuiz";

function CreateFeed() {
  const [titleValue, setTitleValue] = useState("");
  const [question, setQuestion] = useState("");
  const [show, setShow] = useState(false);
  const [options, setOptions] = useState(["A", "B"]); // Initialize with A and B

  const handleStart = () => {
    // Check if titleValue is not empty and at least two options are provided
    if (titleValue !== "" && options.length >= 2) {
      setShow(true);
    } else {
      // Handle the case where the conditions are not met
      alert("Please enter a quiz title and at least two options.");
    }
  };

  const addOption = () => {
    if (options.length < 4) {
      const newOption = String.fromCharCode(65 + options.length);
      setOptions([...options, newOption]);
    } else {
      alert("You can add up to 4 options.");
    }
  };

  const handleOptionChange = (index, value) => {
    setOptions((prevOptions) => {
      const updatedOptions = [...prevOptions];
      updatedOptions[index] = value;
      return updatedOptions;
    });
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
              <CreateQuiz
                options={options}
                question={question}
                titleValue={titleValue}
              />
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
                  fullWidth
                />
                <Typography mt={3} variant="h5" fontFamily={"Lato"}>
                  Enter Your Question
                </Typography>
                <TextField
                  id="outlined-basic"
                  placeholder="Enter Your Question Name..."
                  variant="outlined"
                  sx={{ marginTop: "20px" }}
                  onChange={(e) => setQuestion(e.target.value)}
                  fullWidth
                />
                <Typography mt={3} variant="h5" fontFamily={"Lato"}>
                  Enter Your Options
                </Typography>
                <Box gap={2} display={"flex"}>
                  {options.map((option, index) => (
                    <React.Fragment key={index}>
                      <Typography mt={4} variant="h5">
                        {String.fromCharCode(65 + index)}
                      </Typography>
                      <TextField
                        id={`outlined-basic-${index}`}
                        placeholder={`Enter Option ${String.fromCharCode(
                          65 + index
                        )}`}
                        variant="outlined"
                        sx={{ marginTop: "20px" }}
                        onChange={(e) =>
                          handleOptionChange(index, e.target.value)
                        }
                        fullWidth
                      />
                    </React.Fragment>
                  ))}
                </Box>
                <p>
                  You can add up to 4 options! (You have to add at least 2
                  options.)
                </p>
                <Box gap={"10px"} display={"flex"} justifyContent={"flex-end"}>
                  <Button
                    sx={{
                      backgroundColor: "#365486",
                      height: "35px",
                      borderRadius: "10px",
                      marginTop: "30px",
                    }}
                    variant="contained"
                    onClick={addOption}
                  >
                    Add Option
                  </Button>
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
                  </Button>
                </Box>
              </Box>
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

export default CreateFeed;
