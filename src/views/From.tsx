import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { Link } from 'react-router-dom';
import { Path } from '../Router';

const From: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button type="button" onClick={() => dispatch(push('/troubleList'))}>
        遷移
      </button>
      <Link to={Path.TroubleList}>aa</Link>
    </div>
  );
};

export default From;
