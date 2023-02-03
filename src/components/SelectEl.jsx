import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';


export default function SelectEl(props) {

    const {name, label, value, options, onChange} = props;

  return (
    <div>
        <FormControl
            variant="outlined">
            <InputLabel>{label}</InputLabel>
            <Select 
                label={label}
                name={name}
                value={value}
                onChange={onChange}>
            <MenuItem value="">None</MenuItem>
            {
                options.map(
                    item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                )
            }
            </Select>
        </FormControl>
    </div>
  )
}
