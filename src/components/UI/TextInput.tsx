import React from 'react';
import TextField from '@material-ui/core/TextField';

type Props = {
  fullWidth: boolean;
  label: string;
  multiline: boolean;
  required: boolean;
  rows: number;
  value: string;
  type: string;
  onChange: (event: any) => void;
};

const TextInput = (props: Props) => {
  const {
    fullWidth,
    label,
    multiline,
    required,
    rows,
    value,
    type,
    onChange,
  } = props;
  return (
    <TextField
      fullWidth={fullWidth}
      label={label}
      margin="dense"
      multiline={multiline}
      required={required}
      rows={rows}
      value={value}
      type={type}
      onChange={onChange}
    />
  );
};

export default TextInput;
