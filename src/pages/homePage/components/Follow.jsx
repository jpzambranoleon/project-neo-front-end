import { Avatar, Box, CardContent, CardHeader, Container, ListItem, ListItemAvatar, ListItemButton, Paper, Typography } from "@mui/material";

const Follow = () => {
    return (
        <Paper sx={{ mb: 2 }}>
            <ListItem>
                <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "20px" }}>
                    Who to follow
                </Typography>
            </ListItem>
            <ListItemButton>
                <ListItemAvatar>
                    <Avatar src="https://mui.com/static/images/avatar/1.jpg"/>
                </ListItemAvatar>
                <Typography sx={{ fontWeight: "500" }}>
                    Remy Sharp
                </Typography>
            </ListItemButton>
            <ListItemButton>
                <ListItemAvatar>
                    <Avatar src="https://mui.com/static/images/avatar/2.jpg"/>
                </ListItemAvatar>
                <Typography sx={{ fontWeight: "500" }}>
                    Travis Howard
                </Typography>
            </ListItemButton>
            <ListItemButton>
                <ListItemAvatar>
                    <Avatar src="https://mui.com/static/images/avatar/3.jpg"/>
                </ListItemAvatar>
                <Typography sx={{ fontWeight: "500" }}>
                    Cindy Baker
                </Typography>
            </ListItemButton>
        </Paper>
    );
};

export default Follow;