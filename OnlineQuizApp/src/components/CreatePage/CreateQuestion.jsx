import { Box, Divider, Typography, Button } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";

function CreateQuestion({ inputValue }) {
  const StyledButton = styled(Button)({
    backgroundColor: "#365486",
    color: "white",
    borderRadius: "30px",
  });

  return (
    <Box>
      <Typography variant="h4">{inputValue}</Typography>
      <Divider />
      <Box mt={"10px"}>
        <Typography variant="h6">What is the rules of basketball?</Typography>
        <Box display={"flex"} gap={10}>
          <Box>
            <StyledButton size="medium" variant="contained">
              A
            </StyledButton>
            <Typography variant="span" fontSize={20}>
              Rules
            </Typography>
          </Box>
          <Box>
            <StyledButton size="medium" variant="contained">
              B
            </StyledButton>
            <Typography variant="span" fontSize={20}>
              Rules
            </Typography>
          </Box>
          <Box>
            <StyledButton size="medium" variant="contained">
              C
            </StyledButton>
            <Typography variant="span" fontSize={20}>
              Rules
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CreateQuestion;
