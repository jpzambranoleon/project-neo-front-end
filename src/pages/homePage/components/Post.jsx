import { Code, EmojiEmotions, Label, PermMedia, Tag,} from "@mui/icons-material";
import { Button, Typography, Paper, Box, ListItem, TextField, Tooltip, IconButton, InputBase, Divider } from "@mui/material";

const Post = () => {
    return (
        <Paper sx={{ display: { xs: 'none', sm: 'block' } }}>
            <ListItem>
                <Typography>
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
                <Button variant="contained" color="secondary">
                    <Typography>
                        Post
                    </Typography>
                </Button>
            </ListItem>
        </Paper>
    );
};

export default Post;