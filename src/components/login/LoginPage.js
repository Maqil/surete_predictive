import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import AgriAnalyse from "../../img/agri-analyse.png";
import Logo from "../../img/group-3.png";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <Link color="inherit" href="https://material-ui.com/">
        Contact support team
      </Link>{" "}
      <Link color="inherit" href="https://material-ui.com/">
        Terms and conditions
      </Link>{" "}
      {/* {new Date().getFullYear()}
      {"."} */}
    </Typography>
  );
}

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

export default function SignInSide() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
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
            <img src={AgriAnalyse} />
          </div>
          <Typography
            component="h6"
            variant="h6"
            className={classes.seconnecter}
          >
            Se connecter
          </Typography>
          <form className={classes.form} noValidate>
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
            />
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
