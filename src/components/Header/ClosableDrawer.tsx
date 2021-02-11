import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      flexShrink: 0,
      width: 256,
    },
    [theme.breakpoints.down('sm')]: {
      flexShrink: 0,
      width: 150,
    },
  },
  // toolber: theme.mixins.toolber,
  drawerPaper: {
    [theme.breakpoints.up('sm')]: {
      flexShrink: 0,
      width: 256,
    },
    [theme.breakpoints.down('sm')]: {
      flexShrink: 0,
      width: 150,
    },
  },
  serchField: {
    alignItem: 'center',
    display: 'flex',
    marginLeft: 32,
  },
}));

type Page = {
  label: string;
  value: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
};

const ClosableDrawer = (props: Props) => {
  const { open, onClose } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  const pages: Page[] = [
    { label: 'トップ', value: '/' },
    { label: '一覧', value: '/troubleList' },
  ];

  const onClickList = (url: string): void => {
    dispatch(push(url));
    onClose();
  };

  console.log(open);
  console.log(onClose);

  return (
    <nav className={classes.drawer}>
      <Drawer
        anchor="right"
        classes={{ paper: classes.drawerPaper }}
        ModalProps={{ keepMounted: true }}
        open={open}
        onClose={() => onClose()}
      >
        <List>
          {pages.map((page) => (
            <ListItem
              button
              key={page.value}
              onClick={() => onClickList(page.value)}
            >
              <ListItemText primary={page.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </nav>
  );
};

export default ClosableDrawer;
