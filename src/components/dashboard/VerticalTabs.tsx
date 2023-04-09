"use client";
import { useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MessagesTab from './MessagesTab';





export default function VerticalTabs() {
  const [value, setValue] = useState(0);
 

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "2.5rem"}}
    >
       <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
      >
        <Tab label="message" />
        <Tab label="item" />
        <Tab label="Item Three"  />
        <Tab label="Item Four"  />
        <Tab label="Item Five" />
        <Tab label="Item Six"  />
        <Tab label="Item Seven" />
      </Tabs>
      {value===0&& <MessagesTab/>}
    </Box>
  );
}
