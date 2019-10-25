import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  Paper,
  Checkbox,
  Button,
  Tooltip,
  Fab,
  Dialog,
  DialogContent,
  MenuItem
} from "@material-ui/core";

// import DeleteIcon from "@material-ui/icons/Delete";

import LinearProgress from "@material-ui/core/LinearProgress";
import HistoryIcon from "@material-ui/icons/History";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import NavigationIcon from "@material-ui/icons/Navigation";

// SnackBar
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CheckCirlce from "@material-ui/icons/CheckCircle";

import { ReactComponent as TrashSvg } from "../../layouts/img/trash.svg";

import AffecterPng from "../../layouts/img/affecter.png";

const useStyles = makeStyles(theme => ({
  paper: {
    height: 750,
    marginLeft: 52,
    marginRight: 50,
    backgroundColor: "#f3f7fd",
    boxShadow: "none"
  },
  table: {
    minWidth: 750,
    borderCollapse: "separate",
    borderSpacing: "0 5px"
  },
  tableWrapper: {
    maxHeight: 600,
    overflow: "auto"
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  },
  headtableCell: {
    backgroundColor: "white",
    paddingRight: 2,
    paddingLeft: 1,
    borderColor: "#f3f7fd"
  },
  tableCell: {
    paddingRight: 4,
    paddingLeft: 5,
    borderColor: "#f3f7fd",
    fontSize: 12,
    // fontFamily: "Roboto-Regular",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#243b6b"
  },
  checkboxicon: {
    width: 18,
    height: 18,
    color: "#979797"
  },
  checkedicon: {
    width: 18,
    height: 18,
    color: "#0084f4"
  }
}));

// Filters and sort
function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

// HeadCells
const headCells = [
  {
    id: "idechantillon",
    numeric: false,
    disablePadding: true,
    label: "ID Echantillon"
  },
  {
    id: "idparcelle",
    numeric: false,
    disablePadding: true,
    label: "ID parcelle"
  },
  {
    id: "agriculteur",
    numeric: false,
    disablePadding: true,
    label: "Agriculteur"
  },
  {
    id: "envoyepar",
    numeric: false,
    disablePadding: true,
    label: "Envoyé par"
  },
  { id: "culture", numeric: false, disablePadding: false, label: "Culture" },
  { id: "lot", numeric: false, disablePadding: false, label: "Lot" },
  { id: "province", numeric: false, disablePadding: false, label: "Province" },
  { id: "cadre", numeric: false, disablePadding: false, label: "Cadre" },
  {
    id: "laboratoire",
    numeric: false,
    disablePadding: false,
    label: "Laboratoire"
  },
  {
    id: "datedereception",
    numeric: false,
    disablePadding: false,
    label: "Date de réception"
  },
  {
    id: "datedenvoi",
    numeric: false,
    disablePadding: false,
    label: "Date d'envoi"
  },
  { id: "statut", numeric: false, disablePadding: false, label: "Statut" }
];

// Table head
function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort
  } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox" className={classes.headtableCell}>
          <Checkbox
            icon={<CircleUnchecked className={classes.checkboxicon} />}
            checkedIcon={
              <CircleCheckedFilled className={classes.checkedicon} />
            }
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all analyses" }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            className={classes.headtableCell}
            key={headCell.id}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
            align="left"
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={order}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {/* {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null} */}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

const useToolbarStyles = makeStyles(theme => ({
  root: {
    height: 64,
    position: "fixed",
    bottom: 0,
    width: "100%",
    boxShadow: "0 0 9px 0 rgba(0, 0, 0, 0.35)"
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: "#4b4b4b",
          backgroundColor: "white"
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  spacer: {
    flex: "1 1 100%"
  },
  actions: {
    color: theme.palette.text.secondary
  },
  title: {
    flex: "0 0 auto"
  },
  centercontent: {
    paddingLeft: "23%",
    textAlign: "center"
  },
  checkboxicon: {
    width: 18,
    height: 18,
    color: "#979797"
  },

  checkedicon: {
    width: 18,
    height: 18,
    color: "#0084f4"
  },
  numselected: {
    width: 26,
    height: 26,
    borderRadius: 4,
    backgroundColor: "#00c48c",
    color: "white",
    marginRight: "14.1px",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal"
  },
  button: {
    width: 220,
    height: 40,
    margin: theme.spacing(1),
    borderRadius: "6px",
    backgroundColor: "#00c48c",
    "&:hover": {
      backgroundColor: "#00c48c"
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(2),
    marginLeft: -15
  },
  affectertext: {
    width: 150,
    height: 22,
    fontSize: 12,
    fontWeight: "500",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "1.83",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#fbfbfb",
    paddingTop: 10
  },
  optionbutton: {
    width: 170,
    margin: theme.spacing(1)
  },
  optiontext: {
    paddingTop: 18,
    fontSize: 12,
    fontWeight: "500",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#243b6b"
  },
  // For Felecitations dialog
  dialogF: {
    width: 600,
    height: 650,
    borderradius: 9
  },
  headertxt: {
    fontSize: 30,
    fontWeight: "300",
    textAlign: "center",
    color: "#4a4a4a"
  },
  subtxt: {
    marginTop: 34,
    fontSize: 14,
    letterSpacing: 0.09,
    color: "#4a4a4a"
  },
  buttonok: {
    width: 158,
    height: 48,
    marginTop: 42,
    margin: theme.spacing(1),
    color: "white",
    backgroundColor: "#0084f4",
    borderRadius: 6,
    "&:hover": {
      backgroundColor: "#0084f4"
    }
  },
  buttonannuler: {
    width: 158,
    height: 48,
    marginTop: 10,
    margin: theme.spacing(1),
    boxShadow: "none",
    color: "#008cf2",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "#66b5f8",
      color: "white"
    }
  },

  // progress with form control
  wrapper: {
    width: 328,
    height: 90,
    marginTop: 8,
    marginLeft: 112
  },
  paperpropgress: {
    padding: theme.spacing(3, 2),
    borderRadius: 8,
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.07)"
  },
  formControl: {
    margin: theme.spacing(1),
    width: 328,
    height: 48,
    borderRadius: 6,
    backgroundColor: "white"
  },
  info: {
    marginLeft: 19
  },
  lot: {
    marginTop: -12,
    fontSize: 12,
    color: "#4a4a4a"
  },
  propgressbar: {
    marginTop: -10
  },
  countervalue: {
    fontSize: 12,
    fontWeight: "500",
    color: "#66b5f8"
  },
  countermax: {
    fontSize: 12,
    fontWeight: "500",
    color: "#9b9b9b"
  },

  // SnackBar
  snackbar: {
    marginTop: 60
  },
  snackbarcontent: {
    width: 380,
    height: 85,
    borderRadius: 4,
    boxShadow: "0 2px 14px 0 rgba(0, 0, 0, 0.08)",
    backgroundColor: "white"
  },
  snackbartitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#243b6b"
  },
  snackbartext: {
    fontSize: 12,
    lineHeight: 1.08,
    letterSpacing: 0.08,
    color: "rgba(74, 74, 74, 0.57)"
  },
  close: {
    color: "rgba(74, 74, 74, 0.57)",
    marginTop: -110
  }
}));

const BorderLinearProgress = withStyles({
  root: {
    width: 212,
    height: 10,
    backgroundColor: "#e0f0fe"
  },
  bar: {
    backgroundColor: "#66b5f8"
  }
})(LinearProgress);

// Selected items counter
const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected, rowCount, onSelectAllClick } = props;
  const [open, setOpen] = React.useState(false);

  const [state, setState] = React.useState({
    lot: "LOT_Drâ_tafilalt",
    name: "",
    openSnack: false,
    vertical: "top",
    horizontal: "center"
  });

  const { vertical, horizontal, openSnack } = state;

  const handleLotChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  const handleClickAffecter = event => {
    // props.router.push("bar");
    setOpen(true);
  };

  const handleCloseAffecter = () => {
    setOpen(false);
  };

  // SnackBar
  const handleClickSnack = newState => () => {
    setOpen(false);
    setState({ openSnack: true, ...newState });
  };

  const handleCloseSnack = () => {
    setState({ ...state, openSnack: false });
  };

  return (
    <div>
      {numSelected > 0 ? (
        <Toolbar
          className={clsx(classes.root, {
            [classes.highlight]: numSelected > 0
          })}
        >
          <Checkbox
            icon={<CircleUnchecked className={classes.checkboxicon} />}
            checkedIcon={
              <CircleCheckedFilled className={classes.checkedicon} />
            }
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
            // inputProps={{ "aria-label": "select all desserts" }}
          />
          <div className={classes.title}>
            <Typography
              color="inherit"
              variant="subtitle1"
              style={{ display: "flex" }}
            >
              <div className={classes.numselected}>{numSelected}</div>
              lignes selectionnées
            </Typography>
          </div>
          <div className={classes.centercontent} style={{ display: "flex" }}>
            <div className={classes.title}>
              <Button className={classes.optionbutton}>
                <TrashSvg className={classes.extendedIcon} />
                <p className={classes.optiontext}>Exporter CSV</p>
              </Button>
            </div>
            <div className={classes.title}>
              <Button className={classes.optionbutton}>
                <TrashSvg className={classes.extendedIcon} />
                <p className={classes.optiontext}>Supprimer</p>
              </Button>
            </div>
          </div>
          <div className={classes.spacer} />
          <div className={classes.actions}>
            <Tooltip title="affecter">
              <div>
                <Fab
                  variant="extended"
                  aria-label="add"
                  className={classes.button}
                  onClick={event => handleClickAffecter(event)}
                >
                  {/* <SendSvg className={classes.extendedIcon} /> */}
                  <NavigationIcon
                    className={classes.extendedIcon}
                    style={{ fill: "white" }}
                  />
                  <p className={classes.affectertext}>
                    Affecter {numSelected} élèments
                  </p>
                </Fab>
              </div>
            </Tooltip>
          </div>
          <div>
            <Snackbar
              className={classes.snackbar}
              anchorOrigin={{ vertical, horizontal }}
              key={`${vertical},${horizontal}`}
              autoHideDuration={6000}
              open={openSnack}
              onClose={handleCloseSnack}
              ContentProps={{
                "aria-describedby": "message-id"
              }}
            >
              <SnackbarContent
                className={classes.snackbarcontent}
                message={
                  <div>
                    <div style={{ display: "flex" }}>
                      <CheckCirlce
                        style={{ width: 55, height: 55, fill: "#00c48c" }}
                      />
                      <div style={{ display: "inline", marginLeft: 20 }}>
                        <span id="message-id" className={classes.snackbartitle}>
                          Félicitation
                        </span>
                        <p className={classes.snackbartext}>
                          Votre affectation est accomplie avec succès.
                        </p>
                      </div>
                    </div>
                  </div>
                }
                action={[
                  <IconButton
                    className={classes.close}
                    onClick={handleCloseSnack}
                  >
                    <CloseIcon />
                  </IconButton>
                ]}
              />
            </Snackbar>
          </div>
          <Dialog open={open} onClose={handleCloseAffecter}>
            <DialogContent className={classes.dialogF}>
              <Typography align="center">
                <img src={AffecterPng} alt="done" />
              </Typography>
              <Typography align="center" className={classes.headertxt}>
                Affectation de {numSelected} échantillions
              </Typography>
              <Typography align="center" className={classes.subtxt}>
                Choisir un lot déstinataire
              </Typography>
              <Typography align="center">
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  align="left"
                >
                  <Select
                    value={state.lot}
                    onChange={handleLotChange("lot")}
                    inputProps={{
                      name: "lot",
                      id: "outlined-lot-native-simple"
                    }}
                  >
                    <MenuItem value={"LOT_Drâ_tafilalt"}>
                      LOT_Drâa_tafilalt
                    </MenuItem>
                    <MenuItem value={"LOT_Two"}>LOT_Two</MenuItem>
                    <MenuItem value={"LOT_Three"}>LOT_Three</MenuItem>
                  </Select>
                </FormControl>
              </Typography>
              <div className={classes.wrapper}>
                <Paper className={classes.paperpropgress}>
                  <div style={{ display: "flex" }}>
                    <HistoryIcon style={{ width: 55, height: 55 }} />
                    <div style={{ display: "inline" }} className={classes.info}>
                      <p className={classes.lot}>{state.lot}</p>
                      <div>
                        <div
                          style={{ display: "flex" }}
                          className={classes.propgressbar}
                        >
                          <p className={classes.countervalue}>120</p>
                          <div className={classes.spacer} />
                          <p className={classes.countermax}>250</p>
                        </div>
                        <BorderLinearProgress
                          variant="determinate"
                          value={35}
                        />
                      </div>
                    </div>
                  </div>
                </Paper>
              </div>
              <Typography align="center">
                <Button
                  onClick={handleClickSnack({
                    vertical: "top",
                    horizontal: "right"
                  })}
                  // onClick={handleCloseAffecter}
                  variant="contained"
                  className={classes.buttonok}
                >
                  AFFECTER
                </Button>
              </Typography>
              <Typography align="center">
                <Button
                  onClick={handleCloseAffecter}
                  variant="contained"
                  className={classes.buttonannuler}
                >
                  ANNULER
                </Button>
              </Typography>
            </DialogContent>
          </Dialog>
        </Toolbar>
      ) : (
        <Typography variant="h6"></Typography>
      )}
    </div>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

// table data
export default function AnalyseTable(props) {
  const { analyses } = props;
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("idechantillon");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isDesc = orderBy === property && order === "desc";
    setOrder(isDesc ? "asc" : "desc");
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = analyses.map(n => n.idechantillon);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, idechantillon) => {
    const selectedIndex = selected.indexOf(idechantillon);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, idechantillon);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleClickRow = (event, idechantillon) => {};

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const isSelected = idechantillon => selected.indexOf(idechantillon) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, analyses.length - page * rowsPerPage);

  // so set statut color and width according to its value
  const statutStyle = statut => {
    switch (statut) {
      case "Validé":
        return "#00c48c,49px";
      case "En attente d'affectation":
        return "#66b5f8,127px";
      case "En cours de validation":
        return "#ffa26b,120px";
      case "En cours d’analyse":
        return "#ffcf5c,106px";
      case "Contesté":
        return "#ff647c,61px";
      default:
        return "red,127px";
    }
  };

  return (
    <div>
      <div>
        <Paper className={classes.paper}>
          <div className={classes.tableWrapper}>
            <Table
              stickyHeader
              className={classes.table}
              aria-labelledby="tableTitle"
            >
              <EnhancedTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={analyses.length}
              />
              <TableBody>
                {stableSort(analyses, getSorting(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.idechantillon);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={event =>
                          handleClickRow(event, row.idechantillon)
                        }
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.idechantillon}
                        selected={isItemSelected}
                        style={
                          index % 2
                            ? { background: "rgb(251, 252, 254)" }
                            : {
                                background: "white"
                              }
                        }
                      >
                        <TableCell
                          onClick={event =>
                            handleClick(event, row.idechantillon)
                          }
                          padding="checkbox"
                          className={classes.tableCell}
                        >
                          <Checkbox
                            icon={
                              <CircleUnchecked
                                className={classes.checkboxicon}
                              />
                            }
                            checkedIcon={
                              <CircleCheckedFilled
                                className={classes.checkedicon}
                              />
                            }
                            checked={isItemSelected}
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          className={classes.tableCell}
                        >
                          {row.idechantillon}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="left">
                          {row.idparcelle}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="left">
                          {row.agriculteur}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="left">
                          {row.envoyepar}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="left">
                          {row.culture}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="left">
                          {row.lot}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="left">
                          {row.province}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="left">
                          {row.cadre}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="left">
                          {row.laboratoire}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="left">
                          {row.datedereception}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="left">
                          {row.datedenvoi}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="left">
                          <div
                            style={{
                              backgroundColor: statutStyle(row.statut).split(
                                ","
                              )[0],
                              width: statutStyle(row.statut).split(",")[1],
                              height: 22,
                              borderRadius: 3,
                              paddingTop: 4,
                              textAlign: "center",
                              fontSize: 10,
                              color: "white"
                            }}
                          >
                            {row.statut}
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 49 * emptyRows }}>
                    <TableCell colSpan={6} className={classes.tableCell} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50, 100]}
            labelRowsPerPage="Lignes par page"
            component="div"
            count={analyses.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              "aria-label": "previous page"
            }}
            nextIconButtonProps={{
              "aria-label": "next page"
            }}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
      <EnhancedTableToolbar
        numSelected={selected.length}
        classes={classes}
        order={order}
        orderBy={orderBy}
        onSelectAllClick={handleSelectAllClick}
        onRequestSort={handleRequestSort}
        rowCount={analyses.length}
      />
    </div>
  );
}
