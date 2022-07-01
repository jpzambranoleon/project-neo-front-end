import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Button, CardActionArea, CardHeader, Avatar } from "@mui/material";
import { Apps, Bookmark, Explore, Home, LaptopChromebook, Message, Person, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

export default function LeftBar() {
  return (
    <Box component="div" aria-label="Leftbar" sx={{ display: {xs: 'none', sm: 'block'} }}>
      <Box position="fixed" sx={{ minWidth: 270 }}>
        <Paper sx={{ mb: 2, }}>
          <CardActionArea>
            <CardHeader
                avatar={
                    <Avatar src="/assets/person/diana.jpg"/>
                }
                title="Diana Ayi"
                subheader="@dayi"
            />
          </CardActionArea>
        </Paper>
        <Paper flex={1} sx={{ mb: 2 }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/">
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/profile">
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#explore">
                <ListItemIcon>
                  <Explore />
                </ListItemIcon>
                <ListItemText primary="Explore" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#messages">
                <ListItemIcon>
                  <Message />
                </ListItemIcon>
                <ListItemText primary="Messages" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#courses">
                <ListItemIcon>
                  <LaptopChromebook />
                </ListItemIcon>
                <ListItemText primary="Courses" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#projects">
                <ListItemIcon>
                  <Apps />
                </ListItemIcon>
                <ListItemText primary="Projects" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#bookmarks">
                <ListItemIcon>
                  <Bookmark />
                </ListItemIcon>
                <ListItemText primary="Bookmarks" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#settings">
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ThemeSwitch />
            </ListItem>
          </List>
        </Paper>
        <Button 
          variant="contained" 
          fullWidth 
          size="large"
        >
          Create Post
        </Button>
      </Box>
    </Box>
  );
};
