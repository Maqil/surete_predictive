import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

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
  Fab
} from "@material-ui/core";

// import DeleteIcon from "@material-ui/icons/Delete";

import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import NavigationIcon from "@material-ui/icons/Navigation";

import { ReactComponent as TrashSvg } from "../../layouts/img/trash.svg";

import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles(theme => ({
  wrapper: {
    backgroundColor: "#f3f7fd"
  },
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
  headtableCell: {
    backgroundColor: "white",
    paddingRight: 2,
    paddingLeft: 5,
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
    id: "assignedto",
    numeric: false,
    disablePadding: false,
    label: "Assigné à"
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
    label: "Date  d’assignement"
  },
  {
    id: "",
    numeric: false,
    disablePadding: false,
    label: ""
  }
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
    <TableHead className={classes.tableh}>
      <TableRow>
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
    fontSize: 14
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
    lineHeight: "1.83",
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
    color: "#243b6b"
  }
}));

// Selected items counter
const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected, rowCount, onSelectAllClick } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickAffecter = event => {
    setOpen(true);
  };

  // const handleCloseAffecter = () => {
  //   setOpen(false);
  // };

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

// Option menu
const options = ["None", "Atria", "Callisto"];

// table data
export default function EnhancedTable(props) {
  //   const { analyses } = props;
  const { echantillonnages } = props;
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
      const newSelecteds = echantillonnages.map(n => n.idechantillon);
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const isSelected = idechantillon => selected.indexOf(idechantillon) !== -1;

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, echantillonnages.length - page * rowsPerPage);

  // Option menu

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openOption = Boolean(anchorEl);

  function handleClickOption(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleCloseOption() {
    setAnchorEl(null);
  }

  return (
    <div>
      <div className={classes.wrapper}>
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
                rowCount={echantillonnages.length}
              />
              <TableBody>
                {stableSort(echantillonnages, getSorting(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.idechantillon);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        // onClick={event => handleClick(event, row.idechantillon)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.idechantillon}
                        selected={isItemSelected}
                        // Alternate table row background color
                        style={
                          index % 2
                            ? { background: "rgb(251, 252, 254)" }
                            : {
                                background: "white"
                              }
                        }
                      >
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
                          {row.assignedto}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="left">
                          {row.datedereception}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="left">
                          {row.datedenvoi}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="right">
                          <div>
                            <IconButton
                              onClick={handleClickOption}
                              style={{ width: 18, height: 18 }}
                            >
                              <MoreVertIcon style={{ marginTop: -10 }} />
                            </IconButton>
                          </div>
                          {/* <Menu
                              id="long-menu"
                              anchorEl={anchorEl}
                              keepMounted
                              open={openOption}
                              onClose={handleCloseOption}
                              PaperProps={{
                                style: {
                                  width: 200
                                }
                              }}
                            >
                              {options.map(option => (
                                <MenuItem
                                  key={option}
                                  selected={option === "Pyxis"}
                                  onClick={handleCloseOption}
                                >
                                  {option}
                                </MenuItem>
                              ))}
                            </Menu>
                          </div> */}
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
            count={echantillonnages.length}
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
        rowCount={echantillonnages.length}
      />
    </div>
  );
}
