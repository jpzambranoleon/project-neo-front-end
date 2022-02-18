import { BookmarkBorderOutlined, FavoriteBorderOutlined, MessageOutlined, MoreHoriz, ShareOutlined } from "@mui/icons-material";
import { Avatar, CardActions, CardHeader, CardMedia, IconButton, Box } from "@mui/material";

const Feed = () => {
    return (
        <Box bgcolor="white">
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
        </Box>
    )
}

export default Feed;