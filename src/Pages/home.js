import React from "react";
import banner from "../Assets/developer.png";
import { Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const container = {
  padding: "2rem",
};
const heading = {
  fontSize: "5rem",
  color: "rgb(63 61 86)",
  fontWeight: "600",
};
const subHeading = {
  fontSize: "1.2rem",
  color: "#696969",
  marginBottom: "1rem",
};
const btn = {
  border: "1px solid #696969",
  borderRadius: "6px",
  color: "#696969",
  textTransform: "capitalize",
  fontSize: "1rem",
};
const img = {
  width: "100%",
  height: "auto",
};
const link = {
  textDecoration: "none",
};

const Home = () => {
  return (
    <Container style={container}>
      <Grid
        display="flex"
        alignItems="center"
        height="90vh"
        container
        spacing={2}
      >
        <Grid item xs={12} md={6}>
          <Typography style={heading}>Hey There!</Typography>
          <Typography gutterBottom style={subHeading}>
            Let's find your GitHub repos
          </Typography>
          <Link style={link} to="/search-repos">
            <Button style={btn}>Click Here</Button>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={banner} alt="banner here" style={img} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
