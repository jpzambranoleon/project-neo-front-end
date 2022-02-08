import { Avatar, Box, CardContent, CardHeader, Container, ListItemAvatar, ListItemButton, Typography } from "@mui/material";

const Follow = () => {
    return (
        <Box sx={{ bgcolor: "white" }}>
            <Container>
                <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "20px" }}>
                    Who to follow
                </Typography>
            </Container>
            <ListItemButton>
                <ListItemAvatar>
                    <Avatar src="https://mui.com/static/images/avatar/1.jpg"/>
                </ListItemAvatar>
                <Typography>
                    Remy Sharp
                </Typography>
            </ListItemButton>
            <ListItemButton>
                <ListItemAvatar>
                    <Avatar src="https://mui.com/static/images/avatar/2.jpg"/>
                </ListItemAvatar>
                <Typography>
                    Travis Howard
                </Typography>
            </ListItemButton>
            <ListItemButton>
                <ListItemAvatar>
                    <Avatar src="https://mui.com/static/images/avatar/3.jpg"/>
                </ListItemAvatar>
                <Typography>
                    Cindy Baker
                </Typography>
            </ListItemButton>
        </Box>
    );
};

export default Follow;