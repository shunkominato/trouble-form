import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { push } from 'connected-react-router';
import { PrimaryButton, TextInput } from '../components/UI';
import '../assets/css/common.css';
import { register } from '../reducks/troubleLists/operations';

const IdiaForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);
  const [business, setBusiness] = useState('');
  const [title, setTitle] = useState('');
  const [backGround, setBackGround] = useState('');
  const [example, setExample] = useState('');
  const [remark, setRemark] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [titleError, setTitleError] = useState('');
  const [backGroundError, setBackGroundError] = useState('');

  const inputUsername = useCallback(
    (event) => {
      setUsername(event.target.value);
    },
    [setUsername]
  );

  const inputAge = useCallback(
    (event) => {
      setAge(event.target.value);
    },
    [setAge]
  );

  const inputBusiness = useCallback(
    (event) => {
      setBusiness(event.target.value);
    },
    [setBusiness]
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

  const submit = (): void => {
    const userErrorMsg = !username ? '必須項目です' : '';
    setUsernameError(userErrorMsg);
    const titleErrorMsg = !title ? '必須項目です' : '';
    setTitleError(titleErrorMsg);
    const backGroundErrorMsg = !backGround ? '必須項目です' : '';
    setBackGroundError(backGroundErrorMsg);

    if (userErrorMsg || titleErrorMsg || backGroundErrorMsg) {
      alert('入力エラー');
      window.scrollTo(0, 0);
      return;
    }
    dispatch(
      register(username, age, business, title, backGround, example, remark)
    );
  };
  return (
    <div>
      <section className="container">
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
          label="年齢"
          multiline={false}
          rows={1}
          value={age}
          required={false}
          type="number"
          error=""
          onChange={inputAge}
        />

        <TextInput
          fullWidth
          label="職業"
          multiline={false}
          rows={1}
          value={business}
          required={false}
          type="text"
          error=""
          onChange={inputBusiness}
        />

        <TextInput
          fullWidth
          label="表題(必須)"
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
          label="背景(必須)"
          multiline
          rows={10}
          value={backGround}
          required={false}
          type="text"
          error={backGroundError}
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
          error=""
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
          <PrimaryButton label="登録" onClick={submit} />
        </div>
      </section>
    </div>
  );
};

export default IdiaForm;
