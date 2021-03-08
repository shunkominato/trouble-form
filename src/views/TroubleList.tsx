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
import { fetchTroubleLists } from '../reducks/troubleLists/operations';
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

const TroubleList: React.FC = () => {
  const dispatch = useDispatch();
  const troubles = useSelector((state: RootState) => state.troubles);
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchTroubleLists());
  }, []);
  console.log(troubles);
  return (
    <>
      <div>
        <TableContainer className={classes.container} component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>タイトル</StyledTableCell>
                <StyledTableCell align="right">投稿者名</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {troubles.troubles.map((trouble) => (
                <StyledTableRow key={trouble.id}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    onClick={() =>
                      dispatch(push(`troubleList/detail/${trouble.id}`))
                    }
                  >
                    {trouble.trouble}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {trouble.username}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default TroubleList;
