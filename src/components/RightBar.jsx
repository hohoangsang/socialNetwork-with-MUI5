import {
  Avatar,
  AvatarGroup,
  Box,
  Typography,
  ImageList,
  ImageListItem,
  Stack,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";
import React from "react";

function RightBar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Stack position="fixed" spacing={2} width={340}>
        <Box>
          <Typography variant="h6" fontWeight={300}>
            Online friends
          </Typography>
          <AvatarGroup max={6} sx={{ marginTop: "8px" }}>
            <Avatar
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
            />
            <Avatar
              alt="Travis Howard"
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-712513.jpg&fm=jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?cs=srgb&dl=pexels-hannah-nelson-1065084.jpg&fm=jpg"
            />
            <Avatar
              alt="Travis Howard"
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-712513.jpg&fm=jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?cs=srgb&dl=pexels-hannah-nelson-1065084.jpg&fm=jpg"
            />
            <Avatar
              alt="Travis Howard"
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-712513.jpg&fm=jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?cs=srgb&dl=pexels-hannah-nelson-1065084.jpg&fm=jpg"
            />
            <Avatar
              alt="Travis Howard"
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-712513.jpg&fm=jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?cs=srgb&dl=pexels-hannah-nelson-1065084.jpg&fm=jpg"
            />
          </AvatarGroup>
        </Box>
        <Box>
          <Typography variant="h6" fontWeight={300}>
            Latest Photo
          </Typography>
          <ImageList cols={3} rowHeight={100} sx={{ marginTop: "8px" }}>
            <ImageListItem>
              <img
                src={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e`}
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src={`https://images.unsplash.com/photo-1551782450-a2132b4ba21d`}
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src={`https://images.unsplash.com/photo-1522770179533-24471fcdba45`}
                alt=""
              />
            </ImageListItem>
          </ImageList>
        </Box>
        <Box>
          <Typography variant="h6" fontWeight={300}>
            Latest Conversations
          </Typography>
          <List>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Travis Howard"
                  src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?cs=srgb&dl=pexels-hannah-nelson-1065084.jpg&fm=jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Cindy Baker"
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Stack>
    </Box>
  );
}

export default RightBar;
