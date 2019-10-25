import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Field, reduxForm } from "redux-form";
// import DateTimePicker from "react-widgets/lib/DateTimePicker";
// import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
// import InputLabel from "@material-ui/core/InputLabel";
// import Select from "@material-ui/core/Select";
// import FormHelperText from "@material-ui/core/FormHelperText";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import moment from "moment";
// import momentLocaliser from "react-widgets/lib/localizers/moment";
import momentLocaliser from "react-widgets-moment";

import "react-widgets/dist/css/react-widgets.css";

import Grid from "@material-ui/core/Grid";

import Refresh from "@material-ui/icons/Refresh";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

momentLocaliser(moment);

const useStyles = makeStyles(theme => ({
  form: {
    marginTop: -35,
    paddingLeft: 33
  },
  fieldselect: {
    marginRight: 19,
    backgroundColor: "white",
    width: 206,
    height: 45,
    borderRadius: "6px",
    borderColor: "white"
  },
  label: {
    paddingTop: 10,
    color: "white",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: 1.71,
    letterSpacing: "normal"
  },
  dateformControl: {
    backgroundColor: "white",
    width: 206,
    height: 45,
    borderRadius: "6px"
  },
  submitbutton: {
    marginTop: 40,
    marginRight: theme.spacing(3),
    backgroundColor: "transparent",
    width: 130,
    height: 45,
    borderRadius: "6px",
    borderColor: "white",
    color: "white"
  },
  resetbutton: {
    marginTop: 40,
    marginRight: theme.spacing(3),
    backgroundColor: "white",
    width: 45,
    height: 45,
    borderRadius: "6px",
    borderColor: "white"
  },
  reseticon: {
    color: "#0084f4"
  }
}));

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid white",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}))(InputBase);

const renderDateTimePicker = ({ input: { onChange, value }, showTime }) => (
  // <DateTimePicker
  //   onChange={onChange}
  //   format="DD MMM YYYY"
  //   placeholder="MM/DD/YYYY"
  //   time={false}
  //   value={!value ? null : new Date(value)}
  //   style={{ width: 206, marginRight: 19 }}
  // />
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Grid
      container
      justify="space-around"
      style={{
        marginRight: 19,
        backgroundColor: "white",
        width: 206,
        height: 45,
        borderRadius: 6
      }}
    >
      <KeyboardDatePicker
        onChange={onChange}
        placeholder="MM/DD/YYYY"
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        // label="Date picker inline"
        value={!value ? null : new Date(value)}
        KeyboardButtonProps={{
          "aria-label": "change date"
        }}
        InputProps={{
          disableUnderline: true
        }}
      />
    </Grid>
  </MuiPickersUtilsProvider>
);

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={touched && error}>
    <NativeSelect {...input} {...custom} input={<BootstrapInput />}>
      {children}
    </NativeSelect>
  </FormControl>
);

// const renderSelectField = ({
//   input,
//   label,
//   meta: { touched, error },
//   children,
//   ...custom
// }) => (
//   <FormControl error={touched && error}>
//     <InputLabel htmlFor="age-native-simple">Age</InputLabel>
//     <Select
//       native
//       {...input}
//       {...custom}
//       inputProps={{
//         name: "age",
//         id: "age-native-simple"
//       }}
//     >
//       {children}
//     </Select>
//     {/* {renderFromHelper({ touched, error })} */}
//   </FormControl>
// );

const FiltersForm = props => {
  const classes = useStyles();
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <Grid container>
        <div>
          <label className={classes.label}>Date de réception</label>
          <div>
            <Field
              name="ddr"
              showTime={false}
              component={renderDateTimePicker}
            />
          </div>
        </div>
        <div>
          <label className={classes.label}>Statut</label>
          <div>
            <Field
              name="statut"
              component={renderSelectField}
              className={classes.fieldselect}
            >
              <option value="0">Tout</option>
              <option value="1">Red</option>
              <option value="2">Green</option>
              <option value="3">Blue</option>
            </Field>
          </div>
        </div>
        <div>
          <label className={classes.label}>Envoyé par</label>
          <div>
            <Field
              name="envoyepar"
              component={renderSelectField}
              className={classes.fieldselect}
            >
              <option value={1}>Tout</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Field>
          </div>
        </div>
        <div>
          <label className={classes.label}>Laboratoire</label>
          <div>
            <Field
              name="laboratoire"
              component={renderSelectField}
              className={classes.fieldselect}
            >
              <option value={1}>Tout</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Field>
          </div>
        </div>
        <div>
          <label className={classes.label}>Lot</label>
          <div>
            <Field
              name="lot"
              component={renderSelectField}
              className={classes.fieldselect}
            >
              <option value={1}>Tout</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Field>
          </div>
        </div>
        <div>
          <label className={classes.label}>Cadre</label>
          <div>
            <Field
              name="cadre"
              component={renderSelectField}
              className={classes.fieldselect}
            >
              <option value={1}>Tout</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Field>
          </div>
        </div>
      </Grid>
      <Grid container>
        <div>
          <label className={classes.label}>Groupe de Culture</label>
          <div>
            <Field
              name="groupedeculture"
              component={renderSelectField}
              className={classes.fieldselect}
            >
              <option value={1}>Tout</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Field>
          </div>
        </div>
        <div>
          <label className={classes.label}>Culture</label>
          <div>
            <Field
              name="culture"
              component={renderSelectField}
              className={classes.fieldselect}
            >
              <option value={1}>Tout</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Field>
          </div>
        </div>
        <div>
          <label className={classes.label}>Région</label>
          <div>
            <Field
              name="region"
              component={renderSelectField}
              className={classes.fieldselect}
            >
              <option value={1}>Tout</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Field>
          </div>
        </div>
        <div>
          <label className={classes.label}>Province</label>
          <div>
            <Field
              name="province"
              component={renderSelectField}
              className={classes.fieldselect}
            >
              <option value={1}>Tout</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Field>
          </div>
        </div>
        <div>
          <label className={classes.label}>Commune</label>
          <div>
            <Field
              name="commune"
              component={renderSelectField}
              className={classes.fieldselect}
            >
              <option value={1}>Tout</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Field>
          </div>
        </div>
        <div>
          <button
            type="submit"
            disabled={pristine || submitting}
            className={classes.submitbutton}
          >
            Submit
          </button>
          <button
            type="button"
            className={classes.resetbutton}
            disabled={pristine || submitting}
            onClick={reset}
          >
            <Refresh className={classes.reseticon} />
          </button>
        </div>
      </Grid>
    </form>
  );
};

export default reduxForm({
  form: "simple" // a unique identifier for this form
})(FiltersForm);
