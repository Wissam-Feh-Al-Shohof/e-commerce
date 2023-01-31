/* eslint-disable no-restricted-globals */
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const SelectField = (props:any)=> {
  const [category, setCategory] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
    return props.onFilter(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, maxWidth:"45%" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={"electronics"}>Electronics</MenuItem>
          <MenuItem value={"jewelery"}>Jewelery</MenuItem>
          <MenuItem value={"men's clothing"}>Men's clothing</MenuItem>
          <MenuItem value={"women's clothing"}>Women's clothing</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}