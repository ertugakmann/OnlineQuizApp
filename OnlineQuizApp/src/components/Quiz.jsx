import styled from "@emotion/styled";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

function Quiz() {
  const StyledCard = styled(Card)({
    width: "570px",
    backgroundColor: "whitesmoke",
  });

  return (
    <StyledCard>
      <CardHeader title="Online Football Quiz" subheader="September 14, 2023" />
      <CardMedia
        component="img"
        height="200"
        image="https://tennisnb.ca/wp-content/uploads/2020/04/BLOG-2099x700-quizimage-natasaadzic-gettyimages-iStock-933914672-1200x400-1.jpg"
      />
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
