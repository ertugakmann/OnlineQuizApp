import React from "react";
import styled from "@emotion/styled";
import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import CreateNewQuestion from "./CreateNewQuestion";

function CreateOption({ a, b, handleAddQuestion }) {
  const StyledButton = styled(Button)({
    backgroundColor: "#365486",
    color: "white",
    borderRadius: "30px",
  });

  return (
    <>
      <Box>
        <StyledButton size="medium" variant="contained">
          A
        </StyledButton>
        <Typography marginLeft={1} variant="span" fontSize={20}>
          {a}
        </Typography>
      </Box>
      <Box>
        <StyledButton size="medium" variant="contained">
          B
        </StyledButton>
        <Typography marginLeft={1} variant="span" fontSize={20}>
          {b}
        </Typography>
      </Box>
      <Box
        sx={{
          marginLeft: "auto",
          display: "flex",
          gap: "5px",
        }}
      >
        <Box>
          <StyledButton size="medium" variant="contained">
            Add An Option
          </StyledButton>
        </Box>
        <Box>
          <StyledButton
            onClick={handleAddQuestion}
            size="medium"
            variant="contained"
          >
            Add An Question
          </StyledButton>
        </Box>
      </Box>
    </>
  );
}

export default CreateOption;
