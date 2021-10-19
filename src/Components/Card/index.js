import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const name = {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 1,
  overflow: "hidden",
  textOverflow: "ellipsis",
  //   wordBreak: "break-all",
};

const description = {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
};

export default function CustomCard({ repo }) {
  return (
    <Box sx={{ minWidth: 350, maxWidth: 350 }}>
      <Card sx={{ textAlign: "left", height: 140 }} variant="outlined">
        <CardContent>
          <Typography style={name} variant="h5" component="div">
            {repo.name}
          </Typography>
          <Typography sx={{ mb: 1 }} color="text.secondary">
            {repo.private === true ? "private" : "public"}
          </Typography>
          <Typography style={description} variant="body2">
            {repo.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
