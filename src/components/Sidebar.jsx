import { Apps, Bookmark, Explore, Home, LaptopChromebook, Message, Person, Settings } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, Paper, Typography } from "@mui/material";
import { useState } from "react";

const Sidebar = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <Paper sx={{ display: {xs: 'none', sm: 'block' } }}>
            <ListItemButton 
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)} 
                sx={{ padding: "20px 20px" }}
            >
                <ListItemIcon>
                    <Home />
                </ListItemIcon>
                <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "20px" }}>
                    Home
                </Typography>
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
                sx={{ padding: "20px 20px" }}
            >
                <ListItemIcon>
                    <Person />
                </ListItemIcon>
                <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "20px" }}>
                    Profile
                </Typography>
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)} 
                sx={{ padding: "20px 20px" }}
            >
                <ListItemIcon>
                    <Message />
                </ListItemIcon>
                <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "20px" }}>
                    Messages
                </Typography>
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)} 
                sx={{ padding: "20px 20px" }}
            >
                <ListItemIcon>
                    <Explore />
                </ListItemIcon>
                <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "20px" }}>
                    Explore
                </Typography>
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 4}
                onClick={(event) => handleListItemClick(event, 4)} 
                sx={{ padding: "20px 20px" }}
            >
                <ListItemIcon>
                    <LaptopChromebook />
                </ListItemIcon>
                <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "20px" }}>
                    Courses
                </Typography>
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 5}
                onClick={(event) => handleListItemClick(event, 5)} 
                sx={{ padding: "20px 20px" }}
            >
                <ListItemIcon>
                    <Apps />
                </ListItemIcon>
                <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "20px" }}>
                    Projects
                </Typography>
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 6}
                onClick={(event) => handleListItemClick(event, 6)} 
                sx={{ padding: "20px 20px" }}
            >
                <ListItemIcon>
                    <Bookmark />
                </ListItemIcon>
                <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "20px" }}>
                    Bookmarks
                </Typography>
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 7}
                onClick={(event) => handleListItemClick(event, 7)}
                sx={{ padding: "20px 20px" }}
            >
                <ListItemIcon>
                    <Settings />
                </ListItemIcon>
                <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "20px" }}>
                    Settings
                </Typography>
            </ListItemButton>
        </Paper>
    )
};

export default Sidebar;