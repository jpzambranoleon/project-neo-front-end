import { Avatar, Box, Typography, Container, CardMedia, CardContent, Button, IconButton, ListItem, ListItemButton, ListItemAvatar} from "@mui/material";
import UserCard from "../../homePage/components/UserCard";

const Friends = () => {
    return (
        <Box bgcolor="white">
            <ListItem>
                <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "20px" }}>
                    Contacts
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
            <ListItemButton>
                <ListItemAvatar>
                    <Avatar src="https://mui.com/static/images/avatar/4.jpg"/>
                </ListItemAvatar>
                <Typography sx={{ fontWeight: "500" }}>
                    Agnes Walker
                </Typography>
            </ListItemButton>
            <ListItemButton>
                <ListItemAvatar>
                    <Avatar src="https://mui.com/static/images/avatar/5.jpg"/>
                </ListItemAvatar>
                <Typography sx={{ fontWeight: "500" }}>
                    Trevor Henderson
                </Typography>
            </ListItemButton>
        </Box>
    );
};

export default Friends;