import * as React from "react";
import Navbar from "./Navbar";
import { Box, Stack } from "@mui/material";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import RightBar from "./RightBar";

function Home() {
  return (
    <Box sx={{ paddingTop: "56px" }}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <Sidebar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default Home;
