import { Box } from "@mui/material";
import React from "react";

function RightBar() {
  return (
    <Box
      bgcolor={"skyblue"}
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Rightbar
    </Box>
  );
}

export default RightBar;
