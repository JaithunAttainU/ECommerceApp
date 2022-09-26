import { Typography, Avatar, AvatarGroup, Box, ImageList, ImageListItem } from '@mui/material'
import React from 'react'
import Divider from '@mui/material/Divider';

function RightBar() {
  return (
    <Box sx={{ width: '200px' }}>
      <Box position="fixed">
        <Typography variant='h6'>Friends</Typography>
        <AvatarGroup total={24} sx={{ marginBottom: 3, marginTop: 2 }}>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/6.jpg" />
          <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Divider />
        <Typography variant='h6'>Latest Photos</Typography>
        <ImageList cols={4} rowHeight={50}>
          <ImageListItem >
            <img
              src={`https://material-ui.com/static/images/image-list/burgers.jpg`}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format&dpr=2`}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://material-ui.com/static/images/image-list/breakfast.jpg`}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem >
            <img
              src={`https://material-ui.com/static/images/image-list/burgers.jpg`}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format&dpr=2`}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://material-ui.com/static/images/image-list/breakfast.jpg`}
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  )
}

export default RightBar