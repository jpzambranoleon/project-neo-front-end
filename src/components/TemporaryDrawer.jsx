import { Home, Inbox } from "@mui/icons-material";
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";


const TemporaryDrawer = () => {

    return (
        <Drawer>
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <Home />
                    </ListItemIcon>
                </ListItemButton>
            </List>
        </Drawer>
    )
}

export default TemporaryDrawer;