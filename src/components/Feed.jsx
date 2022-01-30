import { MoreHoriz } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardHeader, CardMedia, IconButton } from "@mui/material";

const Feed = () => {
    return (
        <Card sx={{ mt: 3 }}>
            <CardHeader 
                avatar={
                    <Avatar src="/assets/person/diana.jpg" />
                }
                action={
                    <IconButton>
                        <MoreHoriz />
                    </IconButton>
                }
                title="Diana Ayi"
                subheader="Dubai, 15 MINUTES AGO"
            />
            <CardMedia 
                component="img"
                height="360"
                image="/assets/post/post5.jpg"
            />
            <CardActions>

            </CardActions>
        </Card>
    )
}

export default Feed;