import { List, ListItem, ListItemIcon, ListItemText, ListItemButton, Box } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Switch from '@mui/material/Switch';

import NightsStayIcon from '@mui/icons-material/NightsStay';

function SideBar() {

  const [checked, setChecked] = useState(false);

  const handleToggle = () => () => {
    setChecked(!checked);
  };

  return (
    <Box sx={{ width: '200px' }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton href="/home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="HomePage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="/home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Activity" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="/home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="/home">
              <ListItemIcon>
                <NightsStayIcon />
              </ListItemIcon>
              <ListItemText primary="Dark Mode" />
              <Switch
                edge="end"
                onChange={handleToggle()}
                checked={checked}
              // inputProps={{
              //   'aria-labelledby': 'switch-list-label-wifi',
              // }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default SideBar