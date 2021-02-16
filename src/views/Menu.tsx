import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
  root: {
    width: 250,
    margin: '16px auto',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Menu = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div>
      <Card
        className={classes.root}
        onClick={() => dispatch(push('/troubleList'))}
      >
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            悩み一覧
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.root} onClick={() => console.log('sss')}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            サービスアイデア一覧
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Menu;
