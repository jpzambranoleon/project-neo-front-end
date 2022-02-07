import { Analytics, Bookmark, Chat, Dashboard, Drafts, Inbox, Person, Settings } from "@mui/icons-material";
import { Box, Card, Divider, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useState } from "react";

const Sidebar2 = () => {

    return (
        <Box sx={{ bgcolor: "white", mt: 3 }}>
           <Typography variant="h2">
               Home
           </Typography>
           <Typography variant="h2">
               Explore
           </Typography>
           <Typography variant="h2">
               Notifications
           </Typography>
           <Typography variant="h2">
               Messages
           </Typography>
           <Typography variant="h2">
               Bookmarks
           </Typography>
           <Typography variant="h2">
               Lists
           </Typography>
           <Typography variant="h2">
               Profile
           </Typography>
           <Typography variant="h2">
               More
           </Typography>
        </Box>
    )
};

export default Sidebar2;