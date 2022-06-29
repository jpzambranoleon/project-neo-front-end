import { Grid, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Button } from "@mui/material";
import User from "../User";
import Sidebar from "../Sidebar";
import { Apps, Bookmark, Explore, Home, LaptopChromebook, Message, Person, Settings } from "@mui/icons-material";

export default function SideMenu() {
  return (
    <>
      <Grid item sm={3}>
        <Paper 
          bgcolor="skyblue" 
          flex={1}
          sx={{ display: { xs: 'none', sm: 'block' }, mb: 2 }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#profile">
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
          </List>
        </Paper>
        <Button 
          variant="contained" 
          fullWidth 
          size="large"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          Create Post
        </Button>
      </Grid>
    </>
  );
};
