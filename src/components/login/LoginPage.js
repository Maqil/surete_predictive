// import React, { useState } from "react";
import React from "react";
// import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  IconButton,
  InputAdornment
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import AgriAnalyse from "../../img/agri-analyse.png";
import Logo from "../../img/group-3.png";
import { useInput } from "../../hooks/form";

// const mockData = [
//   { id: 1, email: "ex1@ex.co", password: "ex1" },
//   { id: 2, email: "ex2@ex.co", password: "ex2" }
// ];

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: `url(${Logo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    resizeMode: "contain"
  },
  login: {
    background: "#F9FAFB"
  },
  paper: {
    margin: theme.spacing(10),
    // display: "flex",
    // flexDirection: "column",
    alignItems: "center",
    paddingTop: "50px"
  },
  logo: {
    margin: theme.spacing(7, 0, 0, 0),
    // backgroundColor: theme.palette.secondary.main
    width: 228,
    height: 57,
    resizeMode: "contain"
  },
  form: {
    marginTop: theme.spacing(1),
    width: "420px",
    height: "48px"
  },
  seconnecter: {
    marginTop: "57px"
  },
  input: {
    background: "white",
    borderRadius: 6
  },
  submit: {
    margin: theme.spacing(2, 0, 0, 0),
    width: "420px",
    height: "48px",
    borderRadius: 6,
    backgroundColor: "#0084f4",
    color: "white"
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "white"
  },
  mdpoublie: {
    marginTop: "23px"
  }
}));

const validations = {
  // eslint-disable-next-line
  EMAIL: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  Password: /^\d*$/
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      <Link color="inherit" href="https://material-ui.com/">
        Contact support team
      </Link>{" "}
      <Link
        color="inherit"
        href="https://material-ui.com/"
        style={{ marginLeft: "30px" }}
      >
        Terms and conditions
      </Link>{" "}
      {/* {new Date().getFullYear()}
      {"."} */}
    </Typography>
  );
}

export default function LoginPage(props) {
  function handleValidation(value, regex) {
    if (value && regex && value.match(regex)) return true;
    // EMTPY
    else if (!value) {
      return "empty";
    } else return false;
  }

  // // the data we're going to submit, just using a hook to display
  // const [data, setData] = useState(null);

  // // // the data we're going to submit, just using a hook to display
  // const [setData] = useState(null);

  // function handleSuccess(data) {
  //   // we're just setting the state here, but typically this would
  //   // be sent to the server for further validation and persistence
  //   setData(data);
  // }

  //pass in array of hooks to validate onSubmit (that's where the data is)
  // const submit = useSubmit([email, password], handleSuccess);

  const email = useInput("Email", "", handleValidation, validations.EMAIL);
  // const password = useInput(
  //   "Password",
  //   "",
  //   handleValidation,
  //   validations.NUMBER
  // );

  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: email.props.value,
    password: "",
    showPassword: false
  });

  const handleChange = prop => event => {
    // console.log(prop, { [prop]: event.target.value });
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  // const handleSubmit = event => {
  //   console.log(props);
  //   event.preventDefault();
  //   const { password } = values;
  //   console.log({ email: email.props.value, password });
  //   for (const user of mockData) {
  //     if (email.props.value === user.email) {
  //       if (password === user.password) {
  //         alert("Success");
  //         props.history.push("home");
  //         break;
  //       } else {
  //         alert("invalid password");
  //       }
  //     } else {
  //       console.log("user not found");
  //     }
  //   }
  // };

  const handleSubmit = event => {
    event.preventDefault();
    const { password } = values;
    let data = JSON.stringify({
      email: email.props.value,
      passwd: password
    });
    fetch("http://localhost:8000/signin", {
      method: "post",
      headers: { "content-Type": "application/json" },
      body: data
    })
      .then(res => res.json())
      .then(result => {
        if (result.success === false) {
          alert("Invalid email or password \n");
        } else if (result.success === true) {
          props.history.push("home");
        }
      });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={6} md={6} className={classes.image} />
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        component={Paper}
        elevation={6}
        square
        className={classes.login}
      >
        <div className={classes.paper}>
          <div className={classes.logo}>
            <img src={AgriAnalyse} alt="agrianalyse" />
          </div>
          <Typography variant="subtitle2" className={classes.seconnecter}>
            Se connecter
          </Typography>
          <form method="POST" className={classes.form} noValidate>
            <TextField
              className={classes.input}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Adresse mail"
              name="email"
              InputProps={{
                // Remove the border
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
              {...email.props}
            />
            {email.props.error && (
              <Typography variant="caption" color="error">
                Adresse mail invalide
              </Typography>
            )}

            <TextField
              className={classes.input}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              id="password"
              autoComplete="current-password"
              onChange={handleChange("password")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
                // Remove the border
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
            />
            <Button
              type="submit"
              variant="contained"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Connexion
            </Button>
            <Grid container className={classes.mdpoublie}>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Mot de passe oublié
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
