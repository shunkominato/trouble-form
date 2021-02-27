import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { push } from 'connected-react-router';
import { PrimaryButton, TextInput } from '../components/UI';
import '../assets/css/common.css';
import { register } from '../reducks/troubleLists/operations';
import { FORM_ERROR, FORM_SUCCESS } from '../common/messages/ui/FormResults';
import { slackWebhook } from '../reducks/commons/operatirons';

const From: React.FC = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('0');
  const [gender, setGender] = useState('男');
  const [trouble, setTrouble] = useState('');
  const [backGround, setBackGround] = useState('');
  const [remark, setRemark] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [troubleError, setTroubleError] = useState('');
  const [backGroundError, setBackGroundError] = useState('');

  const inputUsername = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value);
    },
    [setUsername]
  );

  const inputAge = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setAge(event.target.value);
    },
    [setAge]
  );

  const inputGender = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setGender(event.target.value);
    },
    [setGender]
  );

  const inputBackGround = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setBackGround(event.target.value);
    },
    [setBackGround]
  );

  const inputTrouble = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTrouble(event.target.value);
    },
    [setTrouble]
  );

  const inputRemark = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRemark(event.target.value);
    },
    [setRemark]
  );

  const submit = async (): Promise<void> => {
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

    try {
      await dispatch(
        register(username, age, gender, trouble, backGround, remark)
      );

      window.scrollTo(0, 0);

      setUsername('');
      setAge('0');
      setTrouble('');
      setBackGround('');
      setRemark('');
    } catch (e) {
      alert(FORM_ERROR);
      return;
    }

    const url =
      'https://hooks.slack.com/services/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';
    const payload = {
      text: `【投稿者名】
      ${username}
      【年齢】
      ${age}
      【性別】
      ${gender}
      【悩み】
      ${trouble}
      【背景】
      ${backGround}
      【備考】
      ${remark}`,
    };

    await dispatch(slackWebhook(url, payload));
    alert(FORM_SUCCESS);
    dispatch(push('/'));
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
          <PrimaryButton label="投稿" onClick={submit} />
        </div>
      </section>
    </div>
  );
};

export default From;
