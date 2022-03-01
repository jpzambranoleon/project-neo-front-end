import { Apps, Bookmark, Explore, Home, Inbox, LaptopChromebook, Message, Person, Settings } from "@mui/icons-material";
import { Box, Button, ClickAwayListener, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";


const TemporaryDrawer = () => {
    const [open, setOpen] = useState(false);

    const handleClickAway = () => {
        setOpen(false);
    };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
        <Drawer anchor="left" sx={{ display: { sm: 'none' } }} >
            <Box sx={{ width: 250 }}>
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
        </Drawer>
        </ClickAwayListener>
    )
}

export default TemporaryDrawer;