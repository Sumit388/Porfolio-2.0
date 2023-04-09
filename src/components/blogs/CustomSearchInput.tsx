"use client";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { top100Films } from '@/constants/sampleData';

export default function CustomSearchInput({options,label,popupIcon}:any) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options?options:top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} variant="standard"  color={'secondary'}/>}
      popupIcon={popupIcon}
      autoHighlight={false}
    />
  );
}

