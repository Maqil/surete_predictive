import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Divider,
  Typography,
  Button,
  Fab,
  MenuItem,
  IconButton,
  Menu
} from "@material-ui/core";

import { ReactComponent as TypeSvg } from "../../layouts/img/analysedetail/type.svg";
import { ReactComponent as LotSvg } from "../../layouts/img/analysedetail/lot.svg";
import { ReactComponent as CadreSvg } from "../../layouts/img/analysedetail/cadre.svg";
import { ReactComponent as ProfilSvg } from "../../layouts/img/analysedetail/profil.svg";
import { ReactComponent as CinSvg } from "../../layouts/img/analysedetail/cin.svg";
import { ReactComponent as HorisonSvg } from "../../layouts/img/analysedetail/horison.svg";
import { ReactComponent as DateSvg } from "../../layouts/img/analysedetail/date.svg";
import { ReactComponent as LaboratoireSvg } from "../../layouts/img/analysedetail/laboratoire.svg";

import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import HistoryIcon from "@material-ui/icons/History";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
  // Analyse Item
  rootitem: {
    backgroundColor: "rgba(0, 132, 244, 0.82)",
    height: 268
  },
  footercolor: {
    backgroundColor: "#f3f7fd",
    height: 140
  },
  button: {
    width: 240,
    color: "white",
    marginTop: theme.spacing(2),
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: "normal",
    lineHeight: "1.4",
    "&:hover": {
      backgroundColor: "#0084f4"
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(2)
  },
  paperItem: {
    marginLeft: 50,
    marginRight: 50,
    height: 320,
    // boxShadow: "inset 0 -1px 0 0 rgba(208, 201, 214, 0.4)",
    marginTop: theme.spacing(3),
    overflowX: "hide",
    position: "relative",
    zIndex: "2"
  },
  spacer: {
    flex: "1 2 100%"
  },
  headercontainer: {
    height: 92
  },
  headerdetail: {
    paddingTop: 24,
    paddingLeft: 34
  },
  fabbutton: {
    width: 242,
    height: 45,
    marginTop: theme.spacing(2.5),
    marginRight: 49,
    borderRadius: "6px",
    backgroundColor: "#00c48c",
    "&:hover": {
      backgroundColor: "#00c48c"
    },
    boxShadow: "none"
  },
  demandedetail: {
    width: 500,
    fontSize: 22,
    fontWeight: "500",
    color: "#243b6b"
  },
  demandetxt: {
    width: 400,
    fontWeight: "500",
    color: "rgba(36, 59, 107, 0.4)"
  },
  demandedate: {
    width: 400,
    fontWeight: "500",
    color: "#243b6b",
    display: "inline"
  },
  optiontext: {
    width: 150,
    height: 22,
    fontSize: 12,
    textAlign: "center",
    color: "#fbfbfb",
    paddingTop: 10
  },
  table: {
    marginLeft: 34,
    minWidth: 650
  },
  statutcontainer: {
    width: 300,
    paddingRight: 10
  },
  detailsdate: {
    fontSize: 14,
    fontWeight: 500,
    color: "#243b6b"
  },
  statut: {
    fontSize: 18,
    fontWeight: 500,
    color: "#00c48c"
  },
  statutdate: {
    fontSize: 14,
    color: "#243b6b"
  },
  headtableCell: {
    borderWidth: 0,
    fontSize: 14,
    fontWeight: 500,
    color: "#939db3"
  },
  tableCell: {
    borderWidth: 0,
    fontSize: 14,
    color: "#243b6b",
    paddingLeft: 56
  }
}));

// Analyse Item
function createData(
  type,
  lot,
  cadre,
  agriculteur,
  cin,
  horison,
  envoyepar,
  datelimite,
  echantionneur,
  laboratoire
) {
  return {
    type,
    lot,
    cadre,
    agriculteur,
    cin,
    horison,
    envoyepar,
    datelimite,
    echantionneur,
    laboratoire
  };
}

const rows = [
  createData(
    "Sol",
    "L_Tanger",
    "DDP",
    "Bouchaib hammadi",
    "BL839972",
    "H1, H2",
    "Kamal ALHIANE",
    "15-09-19",
    "Labomag",
    "Labomag"
  )
];

// const options = [
//   "None",
//   "Atria",
//   "Callisto",
//   "Dione",
//   "Ganymede",
//   "Hangouts Call",
//   "Fish",
//   "Carl Jung"
// ];

const StyledMenu = withStyles({
  paper: {
    width: 242,
    height: 110,
    marginTop: 6,
    borderRadius: 8,
    boxShadow: "0 7px 20px 0 rgba(0, 0, 0, 0.08)"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    width: 230,
    height: 45,
    color: "#585858",
    fontSize: 12,
    fontWeight: "500",
    borderRadius: 6,
    marginLeft: 6,
    "&:hover": {
      width: 230,
      height: 45,
      fontSize: 12,
      fontWeight: "500",
      borderRadius: 6,
      backgroundColor: "#008cf2",
      "& .MuiListItemIcon-root, & .MuiListItemText-secondary": {
        fontSize: 12,
        fontWeight: "500",
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

export default function SimpleTable() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElDownload, setAnchorElDownload] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClickHistory = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseHistory = () => {
    setAnchorEl(null);
  };

  const handleClickDownload = event => {
    setAnchorElDownload(event.currentTarget);
  };

  const handleCloseDownload = () => {
    setAnchorElDownload(null);
  };

  return (
    <div>
      <div className={classes.rootitem}>
        <div style={{ display: "flex" }}>
          <Button className={classes.button}>
            <KeyboardBackspace />
            Analyses
          </Button>
          <div className={classes.spacer} />
          <div>
            <Fab className={classes.fabbutton} onClick={handleClickDownload}>
              <p className={classes.optiontext}>Télécharger</p>
              <ArrowDropDown style={{ fill: "white" }} />
            </Fab>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorElDownload}
              keepMounted
              open={Boolean(anchorElDownload)}
              onClose={handleCloseDownload}
            >
              <StyledMenuItem>
                <ListItemText
                  secondary="Rapport de recommandation"
                  align="center"
                />
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemText secondary="Rapport laboratoire" align="center" />
              </StyledMenuItem>
            </StyledMenu>
          </div>
        </div>
        <Paper className={classes.paperItem}>
          <div className={classes.headercontainer}>
            <div style={{ display: "flex" }} className={classes.headerdetail}>
              <div style={{ display: "inline" }}>
                <Typography className={classes.demandedetail}>
                  Demande d’analyse N° ANL765762
                </Typography>
                <Typography className={classes.demandetxt}>
                  Date de création :
                  <p className={classes.demandedate}>10-09-19 à 16:55</p>
                </Typography>
              </div>

              <div className={classes.spacer} />
              <div className={classes.statutcontainer}>
                <Typography align="right" className={classes.statut}>
                  Validé
                </Typography>
                <Typography align="right" className={classes.statutdate}>
                  Le : 22-09-19 à 18:00
                </Typography>
              </div>
              <div>
                <IconButton
                  style={{ marginRight: 20 }}
                  aria-label="history"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  onClick={handleClickHistory}
                >
                  <HistoryIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleCloseHistory}
                  PaperProps={{
                    style: {
                      width: 296,
                      height: 338,
                      borderRadius: 8,
                      boxShadow: "0 7px 20px 0 rgba(0, 0, 0, 0.08)",
                      backgroundColor: "white",
                      marginTop: 85,
                      marginLeft: -60
                    }
                  }}
                >
                  {/* {options.map(option => ( */}
                  <MenuItem key={"1"} onClick={handleCloseHistory}>
                    <Typography
                      style={{
                        marginTop: 8,
                        fontSize: 18,
                        fontWeight: 500,
                        color: "#66b5f8"
                      }}
                    >
                      En attente d’affectation
                      <Typography className={classes.detailsdate}>
                        10-09-19 à 12:23
                      </Typography>
                    </Typography>
                  </MenuItem>
                  <MenuItem key={"2"} onClick={handleCloseHistory}>
                    <Typography
                      style={{
                        marginTop: 8,
                        fontSize: 18,
                        fontWeight: 500,
                        color: "#ffcf5c"
                      }}
                    >
                      En cours d’analyse
                      <Typography className={classes.detailsdate}>
                        10-09-19 à 12:23
                      </Typography>
                    </Typography>
                  </MenuItem>
                  <MenuItem key={"3"} onClick={handleCloseHistory}>
                    <Typography
                      style={{
                        marginTop: 8,
                        fontSize: 18,
                        fontWeight: 500,
                        color: "#ffa26b"
                      }}
                    >
                      En cours de validation
                      <Typography className={classes.detailsdate}>
                        10-09-19 à 12:23
                      </Typography>
                    </Typography>
                  </MenuItem>
                  <MenuItem key={"4"} onClick={handleCloseHistory}>
                    <Typography
                      style={{
                        marginTop: 8,
                        fontSize: 18,
                        fontWeight: 500,
                        color: "#00c48c"
                      }}
                    >
                      Validé
                      <Typography className={classes.detailsdate}>
                        10-09-19 à 12:23
                      </Typography>
                    </Typography>
                  </MenuItem>
                  <MenuItem key={"5"} onClick={handleCloseHistory}>
                    <Typography
                      style={{
                        marginTop: 8,
                        fontSize: 18,
                        fontWeight: 500,
                        color: "#ff647c"
                      }}
                    >
                      Contesté
                      <Typography className={classes.detailsdate}>
                        10-09-19 à 12:23
                      </Typography>
                    </Typography>
                  </MenuItem>
                  {/* ))} */}
                </Menu>
              </div>
            </div>
          </div>
          <Divider />
          <br />
          <Table className={classes.table} size={"small"}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.headtableCell}>
                  <TypeSvg className={classes.extendedIcon} />
                  Type
                </TableCell>
                <TableCell className={classes.headtableCell} align="left">
                  <LotSvg className={classes.extendedIcon} />
                  Lot
                </TableCell>
                <TableCell className={classes.headtableCell} align="left">
                  <CadreSvg className={classes.extendedIcon} />
                  Cadre
                </TableCell>
                <TableCell className={classes.headtableCell} align="left">
                  <ProfilSvg className={classes.extendedIcon} />
                  Agriculteur
                </TableCell>
                <TableCell className={classes.headtableCell} align="left">
                  <CinSvg className={classes.extendedIcon} />
                  CIN
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.type}>
                  <TableCell className={classes.tableCell} align="left">
                    {row.type}
                  </TableCell>
                  <TableCell className={classes.tableCell} align="left">
                    {row.lot}
                  </TableCell>
                  <TableCell className={classes.tableCell} align="left">
                    {row.cadre}
                  </TableCell>
                  <TableCell className={classes.tableCell} align="left">
                    {row.agriculteur}
                  </TableCell>
                  <TableCell className={classes.tableCell} align="left">
                    {row.cin}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <br />
            <br />
            <TableHead>
              <TableRow>
                <TableCell className={classes.headtableCell} align="left">
                  <HorisonSvg className={classes.extendedIcon} />
                  Horison
                </TableCell>
                <TableCell className={classes.headtableCell} align="left">
                  <ProfilSvg className={classes.extendedIcon} />
                  Envoyé par
                </TableCell>
                <TableCell className={classes.headtableCell} align="left">
                  <DateSvg className={classes.extendedIcon} />
                  Date limite des résultats
                </TableCell>
                <TableCell className={classes.headtableCell} align="left">
                  <ProfilSvg className={classes.extendedIcon} />
                  Echantionneur
                </TableCell>
                <TableCell className={classes.headtableCell} align="left">
                  <LaboratoireSvg className={classes.extendedIcon} />
                  Laboratoire
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={classes.tbody}>
              {rows.map(row => (
                <TableRow key={row.horison}>
                  <TableCell className={classes.tableCell} align="left">
                    {row.horison}
                  </TableCell>
                  <TableCell className={classes.tableCell} align="left">
                    {row.envoyepar}
                  </TableCell>
                  <TableCell className={classes.tableCell} align="left">
                    {row.datelimite}
                  </TableCell>
                  <TableCell className={classes.tableCell} align="left">
                    {row.echantionneur}
                  </TableCell>
                  <TableCell className={classes.tableCell} align="left">
                    {row.laboratoire}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
      <div className={classes.footercolor}></div>
    </div>
  );
}
