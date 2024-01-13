import {
  Avatar,
  Box,
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
  return (
    <Card sx={{ maxWidth: 345, bgcolor: "whitesmoke" }}>
      <CardHeader
        action={<IconButton aria-label="settings"></IconButton>}
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2023"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://an-nasihah.com/wp-content/uploads/2023/05/quiz-image.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Quiz;
