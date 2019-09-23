import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";

import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "transparent",
    paddingLeft: "50px"
  },
  formControl: {
    margin: theme.spacing(2, 1)
  },
  firstselectformControl: {
    margin: theme.spacing(2, 6),
    backgroundColor: "white",
    width: "244px",
    height: "45px",
    borderRadius: "6px"
  },
  selectformControl: {
    margin: theme.spacing(2),
    backgroundColor: "white",
    width: "244px",
    height: "45px",
    borderRadius: "6px"
  },
  dateformControl: {
    margin: theme.spacing(2, 3, 0, 1),
    backgroundColor: "white",
    width: 368,
    height: "45px",
    borderRadius: "6px"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  filterbutton: {
    backgroundColor: "white",
    width: "176px",
    height: "45px",
    borderRadius: "6px",
    border: "solid 1px #45dab9"
  }
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    name: "hai"
  });

  const handleFilterChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  return (
    <div>
      <CssBaseline />
      <form className={classes.form} autoComplete="off">
        <div>
          <FormControl variant="outlined" className={classes.formControl}>
            <Button className={classes.filterbutton}>Default</Button>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <Button className={classes.filterbutton}>Aujourd'hui</Button>
          </FormControl>
          <FormControl className={classes.firstselectformControl}>
            <InputLabel shrink htmlFor="age-native-label-placeholder">
              Age
            </InputLabel>
            <NativeSelect
              value={state.age}
              onChange={handleFilterChange("age")}
              inputProps={{
                name: "age",
                id: "age-native-label-placeholder"
              }}
              disableUnderline
            >
              <option value="">None</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>
          <FormControl className={classes.selectformControl}>
            <InputLabel shrink htmlFor="age-native-label-placeholder">
              Age
            </InputLabel>
            <NativeSelect
              value={state.age}
              onChange={handleFilterChange("age")}
              inputProps={{
                name: "age",
                id: "age-native-label-placeholder"
              }}
              disableUnderline
            >
              <option value="">None</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>
          <FormControl className={classes.selectformControl}>
            <InputLabel shrink htmlFor="age-native-label-placeholder">
              Age
            </InputLabel>
            <NativeSelect
              value={state.age}
              onChange={handleFilterChange("age")}
              inputProps={{
                name: "age",
                id: "age-native-label-placeholder"
              }}
              disableUnderline
            >
              <option value="">None</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>
        </div>
        <div>
          <FormControl className={classes.dateformControl}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                  InputProps={{
                    disableUnderline: true
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </FormControl>
          <FormControl className={classes.firstselectformControl}>
            <InputLabel shrink htmlFor="age-native-label-placeholder">
              Age
            </InputLabel>
            <NativeSelect
              value={state.age}
              onChange={handleFilterChange("age")}
              inputProps={{
                name: "age",
                id: "age-native-label-placeholder"
              }}
              disableUnderline
            >
              <option value="">None</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>
          <FormControl className={classes.selectformControl}>
            <InputLabel shrink htmlFor="age-native-label-placeholder">
              Age
            </InputLabel>
            <NativeSelect
              value={state.age}
              onChange={handleFilterChange("age")}
              inputProps={{
                name: "age",
                id: "age-native-label-placeholder"
              }}
              disableUnderline
            >
              <option value="">None</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>
          <FormControl className={classes.selectformControl}>
            <InputLabel shrink htmlFor="age-native-label-placeholder">
              Age
            </InputLabel>
            <NativeSelect
              value={state.age}
              onChange={handleFilterChange("age")}
              inputProps={{
                name: "age",
                id: "age-native-label-placeholder"
              }}
              disableUnderline
            >
              <option value="">None</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>
        </div>
      </form>
    </div>
  );
}
