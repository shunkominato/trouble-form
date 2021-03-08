import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  })
);

type Props = {
  label: string;
  onClick: () => void;
};

const PrimaryButton = React.memo((props: Props) => {
  const { label, onClick } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={() => onClick()}>
        {label}
      </Button>
    </div>
  );
});

export default PrimaryButton;
