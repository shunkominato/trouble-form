import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { TextInput } from '../components/UI';
import '../assets/css/common.css';

const From: React.FC = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [title, setTitle] = useState('');
  const [backGround, setBackGround] = useState('');
  const [example, setExample] = useState('');
  const [remark, setRemark] = useState('');

  const inputUsername = useCallback(
    (event) => {
      setUsername(event.target.value);
    },
    [setUsername]
  );

  const inputTitle = useCallback(
    (event) => {
      setTitle(event.target.value);
    },
    [setTitle]
  );

  const inputBackGround = useCallback(
    (event) => {
      setBackGround(event.target.value);
    },
    [setBackGround]
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

  return (
    <div>
      <button type="button" onClick={() => dispatch(push('/troubleList'))}>
        遷移
      </button>
      <section className="form__container">
        <TextInput
          fullWidth
          label="投稿者"
          multiline={false}
          rows={1}
          value={username}
          required={false}
          type="text"
          onChange={inputUsername}
        />

        <TextInput
          fullWidth
          label="表題"
          multiline={false}
          rows={1}
          value={title}
          required={false}
          type="text"
          onChange={inputTitle}
        />

        <TextInput
          fullWidth
          label="背景"
          multiline
          rows={10}
          value={backGround}
          required={false}
          type="text"
          onChange={inputBackGround}
        />

        <TextInput
          fullWidth
          label="サービス例"
          multiline
          rows={10}
          value={example}
          required={false}
          type="text"
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
          onChange={inputRemark}
        />
      </section>
    </div>
  );
};

export default From;
