import { Code, EmojiEmotions, PermMedia, Tag,} from "@mui/icons-material";
import { Button, Typography, Paper, Box, ListItem, Tooltip, IconButton, InputBase, Divider } from "@mui/material";

const Post = () => {
    return (
        <Paper sx={{ display: { xs: 'none', sm: 'block' } }}>
            <ListItem>
                <Typography variant="h6">
                    Create a post
                </Typography>
            </ListItem>
            <ListItem>
                <InputBase 
                    placeholder="What's on your mind?"
                    fullWidth
                    multiline
                />
            </ListItem>
            <Divider />
            <ListItem sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                    <Tooltip title="Media" placement="top">
                        <IconButton>
                            <PermMedia />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Tag" placement="top">
                        <IconButton>
                            <Tag />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Write Code" placement="top">
                        <IconButton>
                            <Code />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Feelings" placement="top">
                        <IconButton>
                            <EmojiEmotions />
                        </IconButton>
                    </Tooltip>
                </Box>
                <Button sx={{ textTransform: 'none' }} variant="contained" color="secondary">
                    Post
                </Button>
            </ListItem>
        </Paper>
    );
};

export default Post;