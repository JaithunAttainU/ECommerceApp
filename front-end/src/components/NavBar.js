import { AppBar, Box, IconButton, InputBase, styled, Toolbar, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { padding } from '@mui/system';
import { Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';

const StyleSearch = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary,
  width: "50%",
  margin: '10px',
  padding: '0 10px'
}))

function NavBar() {
  // useEffect(())
  return (
    <AppBar position='fixed' sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Toolbar>
        <IconButton size='large'>
          <AccountBalanceIcon />
        </IconButton>
        <Typography sx={{ fontWeight: 'bold' }}>Facebook</Typography>
        <StyleSearch>
          <InputBase placeholder='Search...' />
        </StyleSearch>
        <div style={{ float: 'right', display: 'flex', alignItems: 'end' }}>
          <IconButton size='large'>
            <Badge badgeContent={4} color="error">
              <MailIcon color='#ffffff' />
            </Badge>
          </IconButton>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar