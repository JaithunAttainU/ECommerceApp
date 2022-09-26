import { AppBar, Box, IconButton, InputBase, styled, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { padding } from '@mui/system';
import { Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';

const StyleSearch = styled('div')(({ theme }) => ({
  backgroundColor: "white",
  width: "50%",
  margin: '10px',
  padding: '0 10px'
}))

function NavBar() {

  const [mailCount, setMailCount] = useState(0)

  const [todoList, setTodoList] = useState([])
  useEffect(() => {
    fetchMailCount()
  }, [])

  const fetchMailCount = async () => {
    // const response = await fetch('https://backend.com/mailCount')
    // const count = await response.json()
    setMailCount(10)
  }

  const addTodo = () => {
    const newTodo = { task: 'Drink Water' }
    setTodoList([...todoList, newTodo])
  }
  return (
    <AppBar position='sticky'>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton size='large'>
          <AccountBalanceIcon />
        </IconButton>
        <Typography sx={{ fontWeight: 'bold' }}>Facebook</Typography>
        <StyleSearch>
          <InputBase placeholder='Search...' />
        </StyleSearch>
        <div style={{ display: 'flex', }}>
          <IconButton size='large'>
            <Badge badgeContent={mailCount} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar