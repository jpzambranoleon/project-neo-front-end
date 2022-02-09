import { Analytics, Apps, Bookmark, Explore, Home, LaptopChromebook, Message, Person, Settings } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  
}));

const Sidebar = () => {
    const classes = useStyles();
    return (
        <Box bgcolor="white" sx={{ mt: 3 }}>
            <ListItemButton sx={{ padding: "20px 20px" }}>
                <ListItemIcon>
                    <Home />
                </ListItemIcon>
                <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "20px" }}>
                    Home
                </Typography>
            </ListItemButton>
            <ListItemButton sx={{ padding: "20px 20px" }}>
                <ListItemIcon>
                    <Person />
                </ListItemIcon>
                <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "20px" }}>
                    Profile
                </Typography>
            </ListItemButton>
            <ListItemButton sx={{ padding: "20px 20px" }}>
                <ListItemIcon>
                    <Message />
                </ListItemIcon>
                <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "20px" }}>
                    Messages
                </Typography>
            </ListItemButton>
            <ListItemButton sx={{ padding: "20px 20px" }}>
                <ListItemIcon>
                    <Explore />
                </ListItemIcon>
                <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "20px" }}>
                    Explore
                </Typography>
            </ListItemButton>
            <ListItemButton sx={{ padding: "20px 20px" }}>
                <ListItemIcon>
                    <LaptopChromebook />
                </ListItemIcon>
                <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "20px" }}>
                    Courses
                </Typography>
            </ListItemButton>
            <ListItemButton sx={{ padding: "20px 20px" }}>
                <ListItemIcon>
                    <Apps />
                </ListItemIcon>
                <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "20px" }}>
                    Projects
                </Typography>
            </ListItemButton>
            <ListItemButton sx={{ padding: "20px 20px" }}>
                <ListItemIcon>
                    <Analytics />
                </ListItemIcon>
                <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "20px" }}>
                    Analytics
                </Typography>
            </ListItemButton>
            <ListItemButton sx={{ padding: "20px 20px" }}>
                <ListItemIcon>
                    <Bookmark />
                </ListItemIcon>
                <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "20px" }}>
                    Bookmarks
                </Typography>
            </ListItemButton>
            <ListItemButton sx={{ padding: "20px 20px" }}>
                <ListItemIcon>
                    <Settings />
                </ListItemIcon>
                <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "20px" }}>
                    Settings
                </Typography>
            </ListItemButton>
        </Box>
    )
};

export default Sidebar;