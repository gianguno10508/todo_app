import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { ExportReactCSV } from "./ExportReactCSV";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontWeight: 600,
    fontSize: 18,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
});

export default function CustomizedTables(props) {
  const classes = useStyles();
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Time</StyledTableCell>
              <StyledTableCell align="center">Monday</StyledTableCell>
              <StyledTableCell align="center">Tuesday</StyledTableCell>
              <StyledTableCell align="center">Wednesday</StyledTableCell>
              <StyledTableCell align="center">Thursday</StyledTableCell>
              <StyledTableCell align="center">Friday</StyledTableCell>
              <StyledTableCell align="center">Saturday</StyledTableCell>
              <StyledTableCell align="center">Sunday</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((row, index) => (
              <StyledTableRow key={index}>
                {row.Time && (
                  <StyledTableCell component="th" rowSpan="5" scope="row">
                    {row.Time}
                  </StyledTableCell>
                )}

                <StyledTableCell align="center">{row.Monday}</StyledTableCell>
                <StyledTableCell align="center">{row.Tuesday}</StyledTableCell>
                <StyledTableCell align="center">{row.Wednesday}</StyledTableCell>
                <StyledTableCell align="center">{row.Thursday}</StyledTableCell>
                <StyledTableCell align="center">{row.Friday}</StyledTableCell>
                <StyledTableCell align="center">{row.Saturday}</StyledTableCell>
                <StyledTableCell align="center">{row.Sunday}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ExportReactCSV csvData={props.data} fileName="schedule" />
    </div>
  );
}
