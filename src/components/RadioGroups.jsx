import React from 'react';
import { FormControl } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { RadioGroup } from '@mui/material';
import { Radio } from '@mui/material';

export default function RadioGroups(props) {

  const {name, label, value, onChange, items} = props;

  return (
    <div>
        <FormControl>
          <FormControlLabel>{label}</FormControlLabel>
          <RadioGroup row 
              name={name}
              label={label}
              value={value}
              onChange={onChange}
          >
            {
              items.map(
                (item) => (
                  <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.title} />
                )
              )
            }
              {/* <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
          </RadioGroup>
      </FormControl>
    </div>
  )
}
