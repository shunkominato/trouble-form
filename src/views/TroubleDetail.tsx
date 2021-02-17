import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { db } from '../firebase';
import '../assets/css/common.css';
import { Trouble } from '../reducks/troubleLists/types';
// import { Troble } from '../reducks/troubleLists/types';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//       },
//     },
//   })
// );

const TroubleDetail = () => {
  // const classes = useStyles();
  const dispatch = useDispatch();
  const id = window.location.pathname
    .split('troubleList/detail')[1]
    .split('/')[1];

  const [trouble, setTrouble] = useState({
    id: '',
    username: '',
    age: 0,
    gender: '',
    business: '',
    trouble: '',
    backGround: '',
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
        const data = doc.data() as Trouble;
        setTrouble(data);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div>
          <h2>{trouble.trouble}</h2>
        </div>

        <p>{`投稿者 : ${trouble.username}`}</p>
        <p>{`年齢 : ${trouble.age}`}</p>
        <p>{`性別 : ${trouble.gender}`}</p>
        <p>{`職業 : ${trouble.business}`}</p>

        <div>
          <u>
            <h3 className="datail__h3">悩み</h3>
          </u>
          <p>{trouble.trouble}</p>
        </div>

        <div>
          <u>
            <h3 className="datail__h3">背景</h3>
          </u>
          <p>{trouble.backGround}</p>
        </div>

        <div>
          <u>
            <h3 className="datail__h3">備考</h3>
          </u>
          <p>{trouble.remark}</p>
        </div>
        <div className="btn-container">
          <Button
            variant="outlined"
            color="primary"
            onClick={() => dispatch(push(`/idiaForm/${id}/${trouble.trouble}`))}
          >
            ビジネスアイディア投稿
          </Button>
        </div>
      </div>
    </>
  );
};

export default TroubleDetail;
