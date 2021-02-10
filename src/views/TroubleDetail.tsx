import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { db } from '../firebase';
import '../assets/css/common.css';
// import { Troble } from '../reducks/troubleLists/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  })
);

const TroubleDetail = () => {
  const classes = useStyles();
  // const dispatch = useDispatch();
  console.log(window.location.pathname);
  console.log('detail');
  const id = window.location.pathname
    .split('troubleList/detail')[1]
    .split('/')[1];

  const [trouble, setTrouble] = useState({
    id: '',
    username: '',
    title: '',
    backGround: '',
    example: '',
    remark: '',
    created_at: '',
    updated_at: '',
  });

  useEffect(() => {
    console.log(id);
    db.collection('troubles')
      .doc(id)
      .get()
      .then((doc) => {
        const data = doc.data();
        if (data) {
          console.log(data);
          setTrouble({
            id: data.id,
            username: data.username,
            title: data.title,
            backGround: data.backGround,
            example: data.example,
            remark: data.remark,
            created_at: data.created_at,
            updated_at: data.updated_at,
          });
        }
      });
  }, []);

  return (
    <>
      <div className="container">
        <div>
          <h2>{trouble.title}</h2>
        </div>

        <p>{trouble.username}</p>
        <div>
          <h3>背景</h3>
          <p>{trouble.backGround}</p>
        </div>
        <div>
          <h3>サービス例</h3>
          <p>{trouble.example}</p>
        </div>
        <div>
          <h3>備考</h3>
          <p>{trouble.remark}</p>
        </div>
        <div className={classes.root}>
          <Button variant="outlined" color="primary">
            ブレインストーミング
          </Button>
        </div>
      </div>
    </>
  );
};

export default TroubleDetail;
