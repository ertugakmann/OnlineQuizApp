import styled from "@emotion/styled";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

function Quiz() {
  const StyledCard = styled(Card)({
    backgroundColor: "whitesmoke",
  });

  return (
    <StyledCard sx={{ width: "100%" }}>
      <CardHeader title="Online Football Quiz" subheader="September 14, 2023" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <Button
        sx={{
          float: "right",
          position: "relative",
          top: "-15px",
          left: "-20px",
          borderRadius: "15px",
          backgroundColor: "#365486",
        }}
        variant="contained"
      >
        Start
      </Button>
    </StyledCard>
  );
}

export default Quiz;
