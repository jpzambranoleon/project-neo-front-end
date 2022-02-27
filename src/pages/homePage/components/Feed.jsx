import { BookmarkBorderOutlined, FavoriteBorderOutlined, MessageOutlined, MoreHoriz, ShareOutlined } from "@mui/icons-material";
import { Avatar, CardActions, CardHeader, CardMedia, IconButton, Box, Paper } from "@mui/material";

const Feed = () => {
    return (
        <Paper>
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
                <Box>
                    <IconButton>
                        <FavoriteBorderOutlined />
                    </IconButton>
                    <IconButton>
                        <MessageOutlined />
                    </IconButton>
                    <IconButton>
                        <ShareOutlined />
                    </IconButton>
                </Box>
                <Box>
                    <IconButton>
                        <BookmarkBorderOutlined />
                    </IconButton>
                </Box>
            </CardActions>
        </Paper>
    )
}

export default Feed;