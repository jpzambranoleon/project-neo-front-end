import { Avatar, Box, CardActionArea, CardHeader, CardMedia } from "@mui/material";

const User = () => {
    return (
        <Box sx={{ bgcolor: "white" }}>
            <CardActionArea>
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

export default User;