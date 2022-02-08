import { Avatar, Box, CardContent, CardHeader, Container, ListItem, ListItemAvatar, ListItemButton, Typography } from "@mui/material";

const Projects = () => {
    return (
        <Box sx={{ bgcolor: "white", mt: 3 }}>
            <ListItem>
                <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "20px" }}>
                    Interesting Projects
                </Typography>
            </ListItem>
        </Box>
    );
};

export default Projects;