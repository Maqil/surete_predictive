import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%",
    display: "inline-block",
    flexWrap: "wrap",
    backgroundColor: "#0084f4",
    paddingLeft: "25px"
  },
  formControl: {
    margin: theme.spacing(2, 1)
  },
  selectformControl: {
    margin: theme.spacing(2),
    backgroundColor: "white",
    width: "244px",
    height: "45px",
    borderRadius: "6px"
  },
  firstselectformControl: {
    margin: theme.spacing(2),
    marginLeft: 30,
    backgroundColor: "white",
    width: "244px",
    height: "45px",
    borderRadius: "6px"
  },
  dateformControl: {
    margin: theme.spacing(2, 1, 0, 1),
    backgroundColor: "white",
    width: 368,
    height: "45px",
    borderRadius: "6px"
  },
  date: {
    marginTop: -14
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  filterbutton: {
    backgroundColor: "white",
    width: "176px",
    height: "45px",
    borderRadius: "6px",
    border: "solid 1px #45dab9",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.85)
    }
  },
  inputlabel: {
    color: "white",
    fontFamily: "Roboto",
    fontSize: "18px",
    marginTop: -25,
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: 1.71,
    letterSpacing: "normal"
  },
  selecttext: {
    marginLeft: 16
  }
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    prestataire: "",
    culture: "",
    status: "",
    region: "",
    province: "",
    commune: ""
  });

  const handlePrestataireChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };
  const handleCultureChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };
  const handleStatutChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };
  const handleRegionChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };
  const handleProvincehange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };
  const handleCommuneChange = name => event => {
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
      <form className={classes.form}>
        <Grid container>
          <FormControl variant="outlined" className={classes.formControl}>
            <Button className={classes.filterbutton}>Default</Button>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <Button className={classes.filterbutton}>Aujourd'hui</Button>
          </FormControl>
          <FormControl className={classes.firstselectformControl}>
            <InputLabel
              shrink
              htmlFor="age-native-label-placeholder"
              className={classes.inputlabel}
            >
              Récupérer par
            </InputLabel>
            <NativeSelect
              value={state.prestataire}
              onChange={handlePrestataireChange("prestataire")}
              inputProps={{
                name: "prestataire",
                id: "prestataire-native-label-placeholder"
              }}
              disableUnderline
              className={classes.selecttext}
              style={{ marginTop: 10 }}
            >
              <option value="">Tout</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>
          <FormControl className={classes.selectformControl}>
            <InputLabel
              shrink
              htmlFor="age-native-label-placeholder"
              className={classes.inputlabel}
            >
              Culture
            </InputLabel>
            <NativeSelect
              value={state.culture}
              onChange={handleCultureChange("culture")}
              inputProps={{
                name: "age",
                id: "age-native-label-placeholder"
              }}
              disableUnderline
              className={classes.selecttext}
              style={{ marginTop: 10 }}
            >
              <option value="">Tout</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>
          <FormControl className={classes.selectformControl}>
            <InputLabel
              shrink
              htmlFor="age-native-label-placeholder"
              className={classes.inputlabel}
            >
              Statut
            </InputLabel>
            <NativeSelect
              value={state.statut}
              onChange={handleStatutChange("statut")}
              inputProps={{
                name: "age",
                id: "age-native-label-placeholder"
              }}
              disableUnderline
              className={classes.selecttext}
              style={{ marginTop: 10 }}
            >
              <option value="">Tout</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid container>
          <FormControl className={classes.dateformControl}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around" className={classes.date}>
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
            <InputLabel
              shrink
              htmlFor="age-native-label-placeholder"
              className={classes.inputlabel}
            >
              Région
            </InputLabel>
            <NativeSelect
              value={state.region}
              onChange={handleRegionChange("region")}
              inputProps={{
                name: "age",
                id: "age-native-label-placeholder"
              }}
              disableUnderline
              className={classes.selecttext}
              style={{ marginTop: 10 }}
            >
              <option value="">Tout</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>
          <FormControl className={classes.selectformControl}>
            <InputLabel
              shrink
              htmlFor="age-native-label-placeholder"
              className={classes.inputlabel}
            >
              Province
            </InputLabel>
            <NativeSelect
              value={state.province}
              onChange={handleProvincehange("province")}
              inputProps={{
                name: "age",
                id: "age-native-label-placeholder"
              }}
              disableUnderline
              className={classes.selecttext}
              style={{ marginTop: 10 }}
            >
              <option value="">Béni-Mellal</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>
          <FormControl className={classes.selectformControl}>
            <InputLabel
              shrink
              htmlFor="age-native-label-placeholder"
              className={classes.inputlabel}
            >
              Commune
            </InputLabel>
            <NativeSelect
              value={state.commune}
              onChange={handleCommuneChange("commune")}
              inputProps={{
                name: "age",
                id: "age-native-label-placeholder"
              }}
              disableUnderline
              className={classes.selecttext}
              style={{ marginTop: 10 }}
            >
              <option value="">Tout</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>
        </Grid>
      </form>
    </div>
  );
}
