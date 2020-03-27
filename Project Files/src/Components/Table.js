import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/core/styles';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor:'#FF0266',
    color: theme.palette.common.white,
    fontSize: 20,
  },
  body: {
    fontSize: 15,
  },
}))(TableCell);






const StyledTableRow = styled(TableRow)({
  background: '#FFFFFF'
  
});

function createData(Monday, Tuesday, Wednesday, Thursday, Friday) {
  return { Monday, Tuesday, Wednesday, Thursday, Friday };
}

const rows = [
  createData('no class selected', 'no class selected', 'no class selected', 'no class selected', 'no class selected'),
  createData('no class selected', 'no class selected', 'no class selected', 'no class selected', 'no class selected'),
  createData('no class selected', 'no class selected', 'no class selected', 'no class selected', 'no class selected'),
  createData('no class selected', 'no class selected', 'no class selected', 'no class selected', 'no class selected'),
  createData('no class selected', 'no class selected', 'no class selected', 'no class selected', 'no class selected'),
  
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    height: 725,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell >Monday</StyledTableCell>
            <StyledTableCell >Tuesday</StyledTableCell>
            <StyledTableCell >Wednesday</StyledTableCell>
            <StyledTableCell >Thursday</StyledTableCell>
            <StyledTableCell>Friday</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.Monday}>
              <StyledTableCell component="th" scope="row">
                {row.Monday}
              </StyledTableCell>
              <StyledTableCell >{row.Tuesday}</StyledTableCell>
              <StyledTableCell >{row.Wednesday}</StyledTableCell>
              <StyledTableCell >{row.Thursday}</StyledTableCell>
              <StyledTableCell >{row.Friday}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}