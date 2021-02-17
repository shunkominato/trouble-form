import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { push } from 'connected-react-router';
import { PrimaryButton, TextInput } from '../components/UI';
import '../assets/css/common.css';
import { register } from '../reducks/idiaLists/operations';

const IdiaForm = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [trouble, setTrouble] = useState('');
  const [title, setTitle] = useState('');
  const [username, setUsername] = useState('');
  const [target, setTarget] = useState('');
  const [example, setExample] = useState('');
  const [remark, setRemark] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [titleError, setTitleError] = useState('');
  const [exampleError, setExampleError] = useState('');

  const inputTitle = useCallback(
    (event) => {
      setTitle(event.target.value);
    },
    [setTitle]
  );

  const inputUsername = useCallback(
    (event) => {
      setUsername(event.target.value);
    },
    [setUsername]
  );

  const inputTarget = useCallback(
    (event) => {
      setTarget(event.target.value);
    },
    [setTarget]
  );

  const inputExample = useCallback(
    (event) => {
      setExample(event.target.value);
    },
    [setExample]
  );

  const inputRemark = useCallback(
    (event) => {
      setRemark(event.target.value);
    },
    [setRemark]
  );

  useEffect(() => {
    const param = window.location.pathname.split('idiaForm')[1].split('/');
    setId(param[1]);
    setTrouble(decodeURI(param[2]));
  }, []);

  const submit = (): void => {
    const userErrorMsg = !username ? '必須項目です' : '';
    setUsernameError(userErrorMsg);
    const titleErrorMsg = !title ? '必須項目です' : '';
    setTitleError(titleErrorMsg);
    const exampleErrorMsg = !example ? '必須項目です' : '';
    setExampleError(exampleErrorMsg);

    if (userErrorMsg || titleErrorMsg || exampleErrorMsg) {
      alert('入力エラー');
      window.scrollTo(0, 0);
      return;
    }
    dispatch(register(id, title, username, target, example, remark));
  };
  return (
    <div>
      <section className="container">
        <h2>{trouble}</h2>
        <TextInput
          fullWidth
          label="サービス表題(必須)"
          multiline={false}
          rows={1}
          value={title}
          required={false}
          type="text"
          error={titleError}
          onChange={inputTitle}
        />

        <TextInput
          fullWidth
          label="投稿者(必須)"
          multiline={false}
          rows={1}
          value={username}
          required={false}
          type="text"
          error={usernameError}
          onChange={inputUsername}
        />

        <TextInput
          fullWidth
          label="ターゲット象"
          multiline
          rows={10}
          value={target}
          required={false}
          type="text"
          error=""
          onChange={inputTarget}
        />

        <TextInput
          fullWidth
          label="サービス例(必須)"
          multiline
          rows={10}
          value={example}
          required={false}
          type="text"
          error={exampleError}
          onChange={inputExample}
        />

        <TextInput
          fullWidth
          label="備考"
          multiline
          rows={10}
          value={remark}
          required={false}
          type="text"
          error=""
          onChange={inputRemark}
        />

        <div className="btn-container">
          <PrimaryButton label="投稿" onClick={submit} />
        </div>
      </section>
    </div>
  );
};

export default IdiaForm;
