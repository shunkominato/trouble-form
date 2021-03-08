import { push } from 'connected-react-router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { fetchIdiaLists } from '../reducks/idiaLists/operations';
// import fetchTroubleLists from '../reducks/troubleLists/operations';
import { RootState } from '../reducks/store';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const useStyles = makeStyles({
  container: {
    paddingTop: 24,
  },
  table: {
    width: '100%',
  },
});

const IdiaList: React.FC = () => {
  const dispatch = useDispatch();
  const idias = useSelector((state: RootState) => state.idias);
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchIdiaLists());
  }, []);
  return (
    <>
      <div>
        <TableContainer className={classes.container} component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>タイトル</StyledTableCell>
                <StyledTableCell>投稿者名</StyledTableCell>
                <StyledTableCell>悩み</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {idias.idias.map((idia) => (
                <StyledTableRow key={idia.id}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    onClick={() => dispatch(push(`idiaList/detail/${idia.id}`))}
                  >
                    {idia.title}
                  </StyledTableCell>
                  <StyledTableCell>{idia.username}</StyledTableCell>
                  <StyledTableCell>{idia.trouble}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default IdiaList;
