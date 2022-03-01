import { Apps, Bookmark, Close, Explore, Home, Inbox, LaptopChromebook, Message, Person, Settings } from "@mui/icons-material";
import { Box, Button, ClickAwayListener, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useState } from "react";
import User from "./User";


const TemporaryDrawer = ({ openDrawer, setOpenDrawer }) => {

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };

    return (
        <Drawer anchor="left" open={openDrawer} sx={{ display: { sm: 'none' } }} >
            <ClickAwayListener onClickAway={handleDrawerClose}>
                <Box sx={{ width: 250, height: '100%' }}>
                    <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography variant="h6">
                            Menu
                        </Typography>
                        <IconButton onClick={handleDrawerClose}>
                            <Close />
                        </IconButton>
                    </Container>
                    <ListItemButton>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText>
                            Home
                        </ListItemText>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText>
                            Profile
                        </ListItemText>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <Message />
                        </ListItemIcon>
                        <ListItemText>
                            Messages
                        </ListItemText>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <Explore />
                        </ListItemIcon>
                        <ListItemText>
                            Explore
                        </ListItemText>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <LaptopChromebook />
                        </ListItemIcon>
                        <ListItemText>
                            Courses
                        </ListItemText>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <Apps />
                        </ListItemIcon>
                        <ListItemText>
                            Projects
                        </ListItemText>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <Bookmark />
                        </ListItemIcon>
                        <ListItemText>
                            Bookmarks
                        </ListItemText>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText>
                            Settings
                        </ListItemText>
                    </ListItemButton>
                </Box>
            </ClickAwayListener>
        </Drawer>
    )
}

export default TemporaryDrawer;