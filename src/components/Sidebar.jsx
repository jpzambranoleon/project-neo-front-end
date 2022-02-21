import { Apps, Bookmark, Explore, Home, LaptopChromebook, Message, Person, Settings } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, Paper, Typography } from "@mui/material";

const Sidebar = () => {
    return (
        <Paper sx={{ mt: 2 }}>
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
        </Paper>
    )
};

export default Sidebar;