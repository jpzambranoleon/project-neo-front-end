import { Analytics, Bookmark, Chat, Dashboard, Drafts, Inbox, Person, Settings } from "@mui/icons-material";
import { Box, Card, Divider, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";

const Sidebar = () => {
    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };

    return (
        <Card sx={{ maxWidth: 283 }}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItemButton
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemIcon>
                        <Dashboard />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemIcon>
                        <Person />
                    </ListItemIcon>
                    <ListItemText primary="User" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    <ListItemIcon>
                        <Analytics />
                    </ListItemIcon>
                    <ListItemText primary="Analytics" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                >
                    <ListItemIcon>
                        <Bookmark />
                    </ListItemIcon>
                    <ListItemText primary="Bookmark" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 4}
                    onClick={(event) => handleListItemClick(event, 4)}
                >
                    <ListItemIcon>
                        <Settings />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItemButton>
            </List>
        </Card>
    )
};

export default Sidebar;