import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  CssBaseline,
  TextField,
  Paper,
  Grid,
  Typography,
  IconButton,
  InputAdornment
} from "@material-ui/core";

import { Visibility, VisibilityOff } from "@material-ui/icons";

// import Image from "../../layouts/img/Logo.jpg";
import Logo from "../../layouts/img/ocp.jpg";
import { useInput } from "./formValidation";

// import { Link } from "react-router-dom";

// Auth
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/authActions";
import { showErrorSnackbar } from "../../actions/snackbarActions";
import { clearErrors } from "../../actions/errorActions";

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
    alignItems: "center",
    paddingTop: "50px"
  },
  logo: {
    // margin: theme.spacing(7, 0, 0, 0),
    width: 100,
    height: 20,
    resizeMode: "contain"
  },
  form: {
    marginTop: theme.spacing(1),
    width: "100%" // Fix IE 11 issue.
  },
  seconnecter: {
    marginTop: 57
  },
  input: {
    background: "white",
    borderRadius: 6
  },
  button: {
    margin: theme.spacing(3, 0, 2),
    // margin: theme.spacing(2, 0, 0, 0),
    width: "100%",
    height: "48px",
    borderRadius: 6,
    backgroundColor: "#00c48c",
    color: "white",
    "&:hover": {
      backgroundColor: "#00c48c"
    }
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

function LoginPage(props) {
  const classes = useStyles();

  function handleValidation(value, regex) {
    if (value && regex && value.match(regex)) return true;
    // EMTPY
    else if (!value) {
      return "empty";
    } else return false;
  }

  const email = useInput("Email", "", handleValidation, validations.EMAIL);

  const [values, setValues] = React.useState({
    email: email.props.value,
    password: "",
    msg: null,
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

  const handleSubmit = event => {
    event.preventDefault();
    const { password } = values;

    if (
      email.props.value === "abdelfattah_admin@gmail.com" &&
      password === "123456"
    ) {
      props.history.push("/admin");
    } else {
      props.showErrorSnackbar("Ce compte n’existe pas");
    }
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
          {/* <div className={classes.logo}>
            <img src={Logo} alt="surete_predictive" />
          </div> */}
          <Typography variant="subtitle2" className={classes.seconnecter}>
            Se connecter
          </Typography>
          <form method="POST" className={classes.form} onSubmit={handleSubmit}>
            <TextField
              className={classes.input}
              variant="outlined"
              margin="normal"
              required={true}
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
              required={true}
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
              className={classes.button}
            >
              Connexion
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

LoginPage.propTypes = {
  // isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  showErrorSnackbar: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user,
  error: state.error
});

export default connect(mapStateToProps, {
  login,
  showErrorSnackbar,
  clearErrors
})(LoginPage);
