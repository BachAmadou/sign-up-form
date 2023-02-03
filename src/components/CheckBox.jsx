import React from 'react';
import { FormControl } from '@mui/material';
import { FormLabel } from '@mui/material';

export default function CheckBox(props) {

    const {name, value, label, onChange} = props;

  return (
    <div>
        <FormControl>
            <FormLabel 
                />
            <CheckBox
                    name={name}
                    color="primary"
                    checked={value}
                    label={label}
                    onChange={onChange}      
                />
        </FormControl>
    </div>
  )
}
