import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import '../assets/css/common.css';
import { PrimaryButton, TextInput } from '../components/UI';

const SignIn = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [pass, setPass] = useState(0);

  const inputId = useCallback(
    (event) => {
      setId(event.target.value);
    },
    [setId]
  );

  const inputPass = useCallback(
    (event) => {
      setPass(event.target.value);
    },
    [setPass]
  );

  const submit = (): void => {
    if (id !== 'some' && pass !== 12) {
      alert('idまたはパスワードが違います');
      window.scrollTo(0, 0);
      return;
    }
    dispatch(push('/menu'));
  };

  return (
    <div className="container">
      <TextInput
        fullWidth
        label="ID"
        multiline
        rows={1}
        value={id}
        required={false}
        type="text"
        error=""
        onChange={inputId}
      />

      <TextInput
        fullWidth
        label="pass"
        multiline
        rows={1}
        value={pass}
        required={false}
        type="text"
        error=""
        onChange={inputPass}
      />

      <div className="btn-container">
        <PrimaryButton label="登録" onClick={submit} />
      </div>
    </div>
  );
};

export default SignIn;
