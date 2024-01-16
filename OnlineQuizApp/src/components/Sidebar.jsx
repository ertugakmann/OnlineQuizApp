import { Box, Typography } from "@mui/material";
import * as React from "react";
import MyQuiz from "./MyQuiz";
import styled from "@emotion/styled";

function Sidebar() {
  const StyledSideBar = styled(Box)({
    backgroundColor: "white",
    paddingTop: "15px",
    paddingLeft: "20px",
    position: "relative",
    left: "-8px",
  });
  {
    /*Is this position true?*/
  }
  return (
    <StyledSideBar>
      <Typography variant="h3" sx={{ color: "#0F1035" }}>
        MY QUIZS
      </Typography>
      <Box>
        <MyQuiz />
        <MyQuiz />
        <MyQuiz />
        <MyQuiz />
      </Box>
    </StyledSideBar>
  );
}

export default Sidebar;
