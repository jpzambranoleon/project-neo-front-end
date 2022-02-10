import { Avatar, Box, Card, CardActionArea, CardHeader, CardMedia } from "@mui/material";

const UserCard = () => {
    return (
        <Card sx={{ bgcolor: "white", borderRadius: "1rem" }}>
            <CardActionArea sx={{ borderRadius: "1rem" }}>
            <CardHeader
                avatar={
                    <Avatar src="/assets/person/diana.jpg"/>
                }
                title="Diana Ayi"
                subheader="@dayi"
            />
            </CardActionArea>
        </Card>
    );
};

export default UserCard;