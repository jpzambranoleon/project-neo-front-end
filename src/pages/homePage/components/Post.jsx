import { Code, EmojiEmotions, Label, PermMedia,} from "@mui/icons-material";
import { alpha, Button, InputBase, Typography, Paper, styled, TextField, Container, Box, CardContent, List, ListItem, Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";

const StyledTextField = styled(TextField)(({ theme }) => ({
    width: '100%',
    backgroundColor: alpha(theme.palette.common.white),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.15),
    },
}));

const SearchField = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.15),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
        width: '20ch',
        },
    },
}));

const useStyles = makeStyles((theme) => ({
    inputBase: {
        alignItems: "center",
        padding: "0.4rem 1rem",
        marginBottom: theme.spacing(2)
    },
    buttonGroup: {
        display: "flex",
        justifyContent: "space-between",
        marginLeft: theme.spacing(1),
        marginBottom: theme.spacing(2),
    }
}))

const Post = () => {
    const classes = useStyles();
    return (
        <Paper>
            <ListItem>
            <Paper sx={{ width: '100%' }}>
                <SearchField>
                    <InputBase placeholder="What's on your mind?"/>
                </SearchField>
            </Paper>
            </ListItem>
            <ListItem sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}>
                <Button>
                    <PermMedia htmlColor="green"/>
                    <Box sx={{ ml: 1 }}>
                        <Typography variant="body3">
                            Media
                        </Typography>
                    </Box>
                </Button>
                <Button>
                    <Label />
                    <Box sx={{ ml: 1 }}>
                        <Typography variant="body3">
                            Tag
                        </Typography>
                    </Box>
                </Button>
                <Button>
                    <Code htmlColor="goldenrod"/>
                    <Box sx={{ ml: 1 }}>
                        <Typography variant="body3">
                            Code
                        </Typography>
                    </Box>
                </Button>
                <Button>
                    <EmojiEmotions htmlColor="tomato"/>
                    <Box sx={{ ml: 1 }}>
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