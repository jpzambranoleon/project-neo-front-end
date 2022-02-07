import { Avatar, Box, CardActionArea, CardHeader, CardMedia } from "@mui/material";

const UserCard = () => {
    return (
        <Box sx={{ ml: 3 }}>
            <CardHeader
                avatar={
                    <Avatar src="/assets/person/diana.jpg"/>
                }
                title="Projects"
                subheader="September 14, 2022"
            />
            <CardActionArea>
                <CardMedia 
                    component="img"
                    height="140"
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                />
            </CardActionArea>
        </Box>
    );
};

export default UserCard;