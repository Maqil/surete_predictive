import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Divider,
  Typography
} from "@material-ui/core";

import { ReactComponent as TypeSvg } from "../../layouts/img/analysedetail/type.svg";
import { ReactComponent as SuperficieSvg } from "../../layouts/img/analyseparcelle/superficie.svg";
import { ReactComponent as RegionSvg } from "../../layouts/img/analyseparcelle/region.svg";
import { ReactComponent as ProvinceSvg } from "../../layouts/img/analyseparcelle/province.svg";
import { ReactComponent as CultureSvg } from "../../layouts/img/analyseparcelle/culture.svg";
import { ReactComponent as RendementSvg } from "../../layouts/img/analyseparcelle/rendement.svg";
import { ReactComponent as ParkSvg } from "../../layouts/img/analyseparcelle/park.svg";
import { ReactComponent as HydriqueSvg } from "../../layouts/img/analyseparcelle/hydrique.svg";

import ParcellePng from "../../layouts/img/analysedetail/parcelle.png";

const useStyles = makeStyles(theme => ({
  root: {
    height: 383,
    paddingTop: 18,
    background: "#f3f7fd"
  },
  extendedIcon: {
    marginRight: theme.spacing(2)
  },
  paper: {
    marginLeft: 50,
    marginRight: 50,
    // boxShadow: "inset 0 -1px 0 0 rgba(208, 201, 214, 0.4)",
    overflowX: "hide"
  },
  headercontainer: {
    height: 82
  },
  title: {
    width: 73,
    height: 28,
    marginTop: 17,
    marginLeft: 15,
    fontSize: 20,
    fontWeight: "500",
    lineHeight: "1.4",
    color: "#243b6b"
  },
  historyicon: {
    width: 37,
    height: 37,
    fill: "black",
    marginTop: 5,
    "&:hover": {
      fill: "#0084f4"
    }
  },
  table: {
    marginLeft: 34,
    minWidth: 650
  },
  astatut: {
    width: 300,
    paddingRight: 20
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

// Analyse Parcelle
function createParcelleData(
  idparcelle,
  superficie,
  region,
  province,
  commune,
  culture,
  precedentCulturale,
  nombreArbre,
  agePlantation,
  modeFertigation,
  statutHydrique,
  rendementObj
) {
  return {
    idparcelle,
    superficie,
    region,
    province,
    commune,
    culture,
    precedentCulturale,
    nombreArbre,
    agePlantation,
    modeFertigation,
    statutHydrique,
    rendementObj
  };
}

const rowsParcelle = [
  createParcelleData(
    "PA37476",
    "12 ha",
    "Grand-Casablanca settat",
    "Benslimane",
    "Miloud",
    "Olivier",
    "Olivier",
    "130",
    "5 ans",
    "Bour",
    "Eau pluviab",
    "Olivier"
  )
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div style={{ display: "flex" }}>
          <img src={ParcellePng} alt="parcelle" />
          <Typography className={classes.title}>Parcelle</Typography>
        </div>
        <Divider />
        <br />
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell className={classes.headtableCell}>
                <TypeSvg className={classes.extendedIcon} />
                Type
              </TableCell>
              <TableCell className={classes.headtableCell} align="left">
                <SuperficieSvg className={classes.extendedIcon} />
                Lot
              </TableCell>
              <TableCell className={classes.headtableCell} align="left">
                <RegionSvg className={classes.extendedIcon} />
                Cadre
              </TableCell>
              <TableCell className={classes.headtableCell} align="left">
                <ProvinceSvg className={classes.extendedIcon} />
                Agriculteur
              </TableCell>
              <TableCell className={classes.headtableCell} align="left">
                <ProvinceSvg className={classes.extendedIcon} />
                CIN
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsParcelle.map(row => (
              <TableRow key={row.type}>
                <TableCell className={classes.tableCell} align="left">
                  {row.idparcelle}
                </TableCell>
                <TableCell className={classes.tableCell} align="left">
                  {row.superficie}
                </TableCell>
                <TableCell className={classes.tableCell} align="left">
                  {row.region}
                </TableCell>
                <TableCell className={classes.tableCell} align="left">
                  {row.province}
                </TableCell>
                <TableCell className={classes.tableCell} align="left">
                  {row.commune}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <br />
          <TableHead>
            <TableRow>
              <TableCell className={classes.headtableCell} align="left">
                <CultureSvg className={classes.extendedIcon} />
                Horison
              </TableCell>
              <TableCell className={classes.headtableCell} align="left">
                <RendementSvg className={classes.extendedIcon} />
                Envoyé par
              </TableCell>
              <TableCell className={classes.headtableCell} align="left">
                <ParkSvg className={classes.extendedIcon} />
                Date limite des résultats
              </TableCell>
              <TableCell className={classes.headtableCell} align="left">
                <ParkSvg className={classes.extendedIcon} />
                Echantionneur
              </TableCell>
              <TableCell className={classes.headtableCell} align="left">
                <TypeSvg className={classes.extendedIcon} />
                Laboratoire
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.tbody}>
            {rowsParcelle.map(row => (
              <TableRow key={row.horison}>
                <TableCell className={classes.tableCell} align="left">
                  {row.culture}
                </TableCell>
                <TableCell className={classes.tableCell} align="left">
                  {row.precedentCulturale}
                </TableCell>
                <TableCell className={classes.tableCell} align="left">
                  {row.nombreArbre}
                </TableCell>
                <TableCell className={classes.tableCell} align="left">
                  {row.agePlantation}
                </TableCell>
                <TableCell className={classes.tableCell} align="left">
                  {row.modeFertigation}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <br />
          <TableHead>
            <TableRow>
              <TableCell className={classes.headtableCell} align="left">
                <HydriqueSvg className={classes.extendedIcon} />
                Statut hydrique
              </TableCell>
              <TableCell className={classes.headtableCell} align="left">
                <RendementSvg className={classes.extendedIcon} />
                Rendement objectif
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.tbody}>
            {rowsParcelle.map(row => (
              <TableRow key={row.statuthydrique}>
                <TableCell className={classes.tableCell} align="left">
                  {row.statutHydrique}
                </TableCell>
                <TableCell className={classes.tableCell} align="left">
                  {row.rendementObj}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <br />
      </Paper>
    </div>
  );
}
