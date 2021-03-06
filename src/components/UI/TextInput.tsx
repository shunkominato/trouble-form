import React from 'react';
import TextField from '@material-ui/core/TextField';
// import { useForm } from 'react-hook-form';
import '../../assets/css/common.css';

type Props = {
  fullWidth: boolean;
  label: string;
  multiline: boolean;
  required: boolean;
  rows: number;
  value: string | number;
  type: string;
  error: string;
  onChange: (event: any) => void;
};

const TextInput = React.memo((props: Props) => {
  const {
    fullWidth,
    label,
    multiline,
    required,
    rows,
    value,
    type,
    error,
    onChange,
  } = props;
  return (
    <div className="input__div">
      <TextField
        error={!!error}
        helperText={error}
        variant={error ? 'filled' : 'standard'}
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
    </div>
  );
});

export default TextInput;
