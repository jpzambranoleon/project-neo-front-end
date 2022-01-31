import { BookmarkBorderOutlined, FavoriteBorderOutlined, MessageOutlined, MoreHoriz, ShareOutlined } from "@mui/icons-material";
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
                subheader="15 MINUTES AGO"
            />
            <CardMedia 
                component="img"
                height="360"
                image="/assets/post/post5.jpg"
            />
            <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
                <div>
                    <IconButton>
                        <FavoriteBorderOutlined />
                    </IconButton>
                    <IconButton>
                        <MessageOutlined />
                    </IconButton>
                    <IconButton>
                        <ShareOutlined />
                    </IconButton>
                </div>
                <div>
                    <IconButton>
                        <BookmarkBorderOutlined />
                    </IconButton>
                </div>
            </CardActions>
        </Card>
    )
}

export default Feed;