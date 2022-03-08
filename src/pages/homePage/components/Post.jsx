import { Code, EmojiEmotions, Label, PermMedia, Tag,} from "@mui/icons-material";
import { Button, Typography, Paper, Box, ListItem, TextField, Tooltip, IconButton } from "@mui/material";

const Post = () => {
    return (
        <Paper sx={{ display: { xs: 'none', sm: 'block' } }}>
            <ListItem>
                <Typography>
                    Create a post
                </Typography>
            </ListItem>
            <ListItem>
                <TextField 
                    id="outline-multiline-static"
                    multiline
                    rows={5}
                    variant="outlined"
                    size="small"
                    sx={{ width: '100%' }}
                />
            </ListItem>
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
                    <Typography variant="body3">
                        Post
                    </Typography>
                </Button>
            </ListItem>
        </Paper>
    );
};

export default Post;