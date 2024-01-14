import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";

function FavoriteQuiz() {
  return (
    <Box>
      <Card sx={{ minWidth: 300, mt: "20px" }}>
        <CardContent>
          <Typography variant="h6">Football Quiz</Typography>
          <Typography color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal...
          </Typography>
        </CardContent>
        <Button
          sx={{
            float: "right",
            position: "relative",
            top: "-10px",
            left: "-10px",
            borderRadius: "15px",
            backgroundColor: "#365486",
          }}
          variant="contained"
        >
          Start
        </Button>
      </Card>
    </Box>
  );
}

export default FavoriteQuiz;
