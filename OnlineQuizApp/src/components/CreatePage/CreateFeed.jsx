import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import styled from "@emotion/styled";

function CreateFeed() {
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
          <Typography variant="h5" fontFamily={"Lato"}>
            Create a Quiz
          </Typography>
          <Box>
            <TextField
              id="outlined-basic"
              placeholder="Enter Your Quiz Name..."
              variant="outlined"
              sx={{ marginTop: "20px" }}
            />
            <Button
              sx={{
                backgroundColor: "#365486",
                height: "35px",
                borderRadius: "10px",
                marginTop: "30px",
                marginLeft: "100px",
              }}
              variant="contained"
            >
              Let's Start
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CreateFeed;
