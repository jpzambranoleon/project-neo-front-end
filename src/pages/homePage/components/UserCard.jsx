import { Avatar, Box, CardActionArea, CardHeader, CardMedia } from "@mui/material";

const UserCard = () => {
    return (
        <Box sx={{ bgcolor: "white", borderRadius: "1rem" }}>
            <CardActionArea sx={{ borderRadius: "1rem" }}>
            <CardHeader
                avatar={
                    <Avatar src="/assets/person/diana.jpg"/>
                }
                title="Diana Ayi"
                subheader="@dayi"
            />
            </CardActionArea>
        </Box>
    );
};

export default UserCard;