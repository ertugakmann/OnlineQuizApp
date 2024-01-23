import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import CreateOption from "./CreateOption";


function CreateQuestion({ titleValue,question,a,b }) {
  return (
    <Box>
      <Typography variant="h4">{titleValue}</Typography>
      <Divider />
      <Box mt={"15px"}>
        <Typography mt={2} sx={{textTransform:"uppercase"}} variant="h5">{question}</Typography>
        <Box mt={2} display={"flex"} gap={10}>     
         <CreateOption a={a} b={b} />
        </Box>
      </Box>
    </Box>
  );
}

export default CreateQuestion;
