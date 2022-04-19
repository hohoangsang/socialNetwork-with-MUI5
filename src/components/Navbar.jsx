import { AppBar, Toolbar, Typography, styled, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { LocalLibrary, Mail, Notifications } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const SearchBox = styled("div")(({theme}) => ({
  backgroundColor: "white",
  padding: "5px 10px",
  width: "50%",
  borderRadius: theme.shape.borderRadius
}))

const IconsBox = styled(Box)(({theme}) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.down("sm")]: {
    display: "none"
  } 
}))

const UserBox = styled(Box)(({theme}) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  } 
}))

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null); 
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position='static'>
      <StyledToolbar>
        <Typography variant='h6' sx={{display: {xs: "none", sm:"block"}}}>DevVerse</Typography>
        <LocalLibrary sx={{display: {xs: "block", sm:"none"}}}/>

        <SearchBox>
          <InputBase placeholder='search...'/>
        </SearchBox>

        <IconsBox>
          <Badge badgeContent={4} color="error">
            <Mail/>
          </Badge>
          <Badge badgeContent={6} color="error">
            <Notifications/>
          </Badge>
          <Avatar 
            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg"
            sx={{width: 30, height: 30}}
            onClick={handleClick}
          />
        </IconsBox>

        <UserBox>
          <Typography variant='p'>Sang</Typography>
          <Avatar 
            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg"
            sx={{width: 30, height: 30}}
            onClick={handleClick}
          />
        </UserBox>
      </StyledToolbar>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar