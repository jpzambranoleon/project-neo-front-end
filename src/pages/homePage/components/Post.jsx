import { Code, EmojiEmotions, Label, PermMedia,} from "@mui/icons-material";
import { Button, Typography, Paper, Box, ListItem, TextField } from "@mui/material";

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
                <Button>
                    <PermMedia htmlColor="green"/>
                    <Box sx={{ ml: 1, textTransform: 'none' }}>
                        <Typography variant="body3">
                            Media
                        </Typography>
                    </Box>
                </Button>
                <Button>
                    <Label />
                    <Box sx={{ ml: 1, textTransform: 'none' }}>
                        <Typography variant="body3">
                            Tag
                        </Typography>
                    </Box>
                </Button>
                <Button>
                    <Code htmlColor="goldenrod"/>
                    <Box sx={{ ml: 1, textTransform: 'none' }}>
                        <Typography variant="body3">
                            Code
                        </Typography>
                    </Box>
                </Button>
                <Button>
                    <EmojiEmotions htmlColor="tomato"/>
                    <Box sx={{ ml: 1, textTransform: 'none' }}>
                        <Typography variant="body3">
                            Feelings
                        </Typography>
                    </Box>
                </Button>
            </ListItem>
        </Paper>
    );
};

export default Post;