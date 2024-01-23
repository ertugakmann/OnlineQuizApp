import React from "react";
import styled from "@emotion/styled";
import { Box, Typography, Button } from "@mui/material";

function CreateOption({ a, b }) {
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
      ß</Box>
    </>
  );
}

export default CreateOption;
