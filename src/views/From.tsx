import React from 'react';
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
// import { slackWebhook } from '../reducks/commons/operatirons';
import { useForms } from '../hooks/useForms';
//bbb
const From: React.FC = () => {
  const dispatch = useDispatch();
  const {
    username,
    age,
    gender,
    trouble,
    backGround,
    remark,
    usernameError,
    troubleError,
    backGroundError,
    inputUsername,
    inputAge,
    inputGender,
    inputTrouble,
    inputBackGround,
    inputRemark,
    setUsernameError,
    setTroubleError,
    setBackGroundError,
    resetForm,
    getErrorMesssage,
  } = useForms();

  const submit = async (): Promise<void> => {
    const {
      userErrorMsg,
      troubleErrorMsg,
      backGroundErrorMsg,
    } = getErrorMesssage(username, trouble, backGround);
    setUsernameError(userErrorMsg);
    setTroubleError(troubleErrorMsg);
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

      resetForm();
    } catch (e) {
      alert(FORM_ERROR);
      return;
    }

    // const url =
    //   'https://hooks.slack.com/services/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';
    // const payload = {
    //   text: `【投稿者名】
    //   ${username}
    //   【年齢】
    //   ${age}
    //   【性別】
    //   ${gender}
    //   【悩み】
    //   ${trouble}
    //   【背景】
    //   ${backGround}
    //   【備考】
    //   ${remark}`,
    // };

    // await dispatch(slackWebhook(url, payload));
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
