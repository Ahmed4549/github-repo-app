import React from "react";
import Axios from "../api";
import {
  Backdrop,
  Button,
  CircularProgress,
  Container,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import CustomCard from "../Components/Card";

const container = {
  padding: "2rem",
  textAlign: "center",
};
const heading = {
  fontSize: "3rem",
  fontWeight: "700",
  color: "rgb(63 61 86)",
  marginBottom: "1rem",
  textTransform: "capitalize",
};
const textField = {
  width: "330px",
};
const inputContainer = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "1rem",
};
const innnerContainer = {
  width: "600px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
const btn = {
  border: "1px solid #696969",
  borderRadius: "6px",
  color: "#696969",
  textTransform: "capitalize",
  fontSize: "1rem",
  padding: "0 1rem",
};
const cardContainer = {
  display: "flex",
  flexWrap: "wrap",
  gap: "2.688rem",
  justifyContent: "center",
};
const notFoundHeading = {
  fontSize: "8rem",
  fontWeight: "700",
  color: "rgb(63 61 86)",
};
const notFoundSubHeading = {
  fontSize: "1.5rem",
  fontWeight: "400",
  color: "rgb(63 61 86)",
};

const SearchRepos = () => {
  const [username, setUsername] = React.useState("");
  const [usernameError, setUsernameError] = React.useState(false);
  const [loader, setLoader] = React.useState(false);
  const [snackbar, setSnackbar] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [repos, setRepos] = React.useState();

  const validate = () => {
    let usernameError = false;
    if (!username) {
      usernameError = true;
    }
    if (usernameError) {
      setUsernameError(usernameError);
      return false;
    }
    return true;
  };

  const usernameChangeHandler = (e) => {
    let { value } = e.target;
    setUsername(value);
    setUsernameError(value ? false : true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      setLoader(true);
      Axios.get(`${username}/repos`)
        .then((res) => {
          setLoader(false);
          setRepos(res.data);
          setError(false);
          console.log(res.data);
          if (res.data.length === 0) {
            setError(true);
          }
        })
        .catch((err) => {
          console.log(err);
          setRepos();
          setLoader(false);
          setError(true);
        });
    } else {
      setSnackbar(true);
    }
  };
  const clearHandler = () => {
    setRepos();
    setUsername("");
  };

  const handleClose = () => {
    setSnackbar(false);
  };

  return (
    <Container style={container}>
      <Typography style={heading}>
        {repos && repos.length > 0
          ? "Here are your repositories!"
          : `You're almost there dude.`}
      </Typography>
      <div style={inputContainer}>
        <div style={innnerContainer}>
          <form onSubmit={submitHandler}>
            <TextField
              name="username"
              value={username}
              onChange={usernameChangeHandler}
              style={textField}
              id="outlined-basic"
              label="GitHub Username"
              variant="outlined"
              error={usernameError}
              autoComplete="off"
            />
          </form>
          <div style={{ display: "flex", gap: ".6rem", height: "100%" }}>
            <Button onClick={submitHandler} style={btn}>
              Get my repos!
            </Button>
            <Button onClick={clearHandler} style={btn}>
              Reset
            </Button>
          </div>
        </div>
      </div>
      {repos && repos.length > 0 && (
        <div
          style={{ display: "flex", justifyContent: "right", margin: "1rem 0" }}
        >
          <Typography sx={{ fontWeight: "600" }}>
            {repos.length} results
          </Typography>
        </div>
      )}
      <div style={cardContainer}>
        {repos &&
          repos.map((repo) => {
            return <CustomCard repo={repo} />;
          })}
        {error && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Typography style={notFoundHeading}>404</Typography>
            <Typography style={notFoundSubHeading}>No Repos Found!</Typography>
          </div>
        )}
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={snackbar}
        onClose={handleClose}
        message="Please enter your Github username!"
      />
    </Container>
  );
};

export default SearchRepos;
