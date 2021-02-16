import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { push } from 'connected-react-router';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { PrimaryButton, TextInput } from '../components/UI';
import '../assets/css/common.css';
import { register } from '../reducks/troubleLists/operations';

const From: React.FC = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('');
  const [trouble, setTrouble] = useState('');
  const [backGround, setBackGround] = useState('');
  const [remark, setRemark] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [troubleError, setTroubleError] = useState('');
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

  const inputGender = useCallback(
    (event) => {
      setGender(event.target.value);
    },
    [setGender]
  );

  const inputBackGround = useCallback(
    (event) => {
      setBackGround(event.target.value);
    },
    [setBackGround]
  );

  const inputTrouble = useCallback(
    (event) => {
      setTrouble(event.target.value);
    },
    [setTrouble]
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
    const troubleErrorMsg = !trouble ? '必須項目です' : '';
    setTroubleError(troubleErrorMsg);
    const backGroundErrorMsg = !backGround ? '必須項目です' : '';
    setBackGroundError(backGroundErrorMsg);

    if (userErrorMsg || troubleErrorMsg || backGroundErrorMsg) {
      alert('入力エラー');
      window.scrollTo(0, 0);
      return;
    }
    dispatch(register(username, age, gender, trouble, backGround, remark));
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

        <div className="input__div">
          <FormControl component="fieldset">
            <FormLabel component="legend">性別</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={gender}
              onChange={inputGender}
            >
              <FormControlLabel value="男" control={<Radio />} label="男" />
              <FormControlLabel value="女" control={<Radio />} label="女" />
            </RadioGroup>
          </FormControl>
        </div>

        <TextInput
          fullWidth
          label="悩み(必須)"
          multiline
          rows={10}
          value={trouble}
          required={false}
          type="text"
          error={troubleError}
          onChange={inputTrouble}
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

export default From;
