import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { push } from 'connected-react-router';
// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { db } from '../firebase';
import '../assets/css/common.css';
import { Idia } from '../reducks/idiaLists/types';

const IdiaDetail: React.FC = () => {
  // const dispatch = useDispatch();
  // const id = window.location.pathname.split('idia/detail')[1].split('/')[1];
  const id = window.location.pathname.split('idiaList/detail')[1].split('/')[1];
  console.log(id);

  const [idia, setIdia] = useState({
    id: '',
    trouble_id: '',
    trouble: '',
    title: '',
    username: '',
    target: '',
    example: '',
    remark: '',
    created_at: '',
    updated_at: '',
  });

  useEffect(() => {
    console.log(id);
    db.collection('idias')
      .doc(id)
      .get()
      .then((doc) => {
        const data = doc.data() as Idia;
        setIdia(data);
      });
  }, []);
  return (
    <>
      <div className="container">
        <div>
          <h2>{idia.title}</h2>
        </div>

        <p>{`投稿者 : ${idia.username}`}</p>
        <div>
          <u>
            <h3 className="datail__h3">ターゲット像</h3>
          </u>
          <p>{idia.target}</p>
        </div>

        <div>
          <u>
            <h3 className="datail__h3">サービス例</h3>
          </u>
          <p>{idia.example}</p>
        </div>

        <div>
          <u>
            <h3 className="datail__h3">備考</h3>
          </u>
          <p>{idia.remark}</p>
        </div>
        <div className="btn-container">
          <Button variant="outlined" color="primary">
            ブレインストーミング
          </Button>
        </div>
      </div>
    </>
  );
};

export default IdiaDetail;
