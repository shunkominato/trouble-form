import React, { useCallback, useState } from 'react';

export const useForms = () => {
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

  const resetForm = () => {
    setUsername('');
    setAge('0');
    setTrouble('');
    setBackGround('');
    setRemark('');
  };

  const getErrorMesssage = (
    username_: string,
    trouble_: string,
    backGround_: string
  ) => {
    const userErrorMsg = !username_ ? '必須項目です' : '';
    const troubleErrorMsg = !trouble_ ? '必須項目です' : '';
    const backGroundErrorMsg = !backGround_ ? '必須項目です' : '';

    return { userErrorMsg, troubleErrorMsg, backGroundErrorMsg };
  };

  return {
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
  };
};
