import { Box, Stack } from "@mui/material";
import React from "react";
import Navbar from "../HomePage/Navbar";
import Sidebar from "../HomePage/Sidebar";
import RightBar from "../HomePage/RightBar";
import CreateFeed from "./CreateFeed";

function CreatePage() {
  return (
    <Box sx={{ paddingTop: "56px" }}>
      <Navbar />
      <Stack direction="row" spacing={3} justifyContent={"space-between"}>
        <Sidebar />
        <CreateFeed />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default CreatePage;