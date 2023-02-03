import React from 'react';
import { TextField } from '@mui/material';


export default function InputFields(props) {

const {name, label, value, onChange} = props;

const handleChange = (e) => {

}

  return (
    <div>
      <TextField 
        variant="outlined"
        label={label}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
