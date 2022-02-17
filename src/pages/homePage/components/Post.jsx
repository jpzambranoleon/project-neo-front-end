import { EmojiEmotions, Label, PermMedia, Room, Send } from "@mui/icons-material";
import { Button, InputBase, Typography, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    inputBase: {
        alignItems: "center",
        padding: "0.4rem 1rem",
        marginBottom: theme.spacing(2)
    },
    buttonGroup: {
        display: "flex",
        marginLeft: theme.spacing(1),
        marginBottom: theme.spacing(2),
    }
}))

const Post = () => {
    const classes = useStyles();
    return (
        <Paper>
            <div className={classes.inputBase}>
                <InputBase multiline placeholder="What's on your mind?" sx={{ width: "100%" }}/>
            </div>
            <div className={classes.buttonGroup}>
                <Button size="small">
                    <PermMedia fontSize="small" htmlColor="tomato"/>
                    <Typography variant="body3">
                        Media
                    </Typography>
                </Button>
                <Button size="small">
                    <Label fontSize="small" htmlColor="blue"/>
                    <Typography variant="body3">
                        Tag
                    </Typography>
                </Button>
                <Button size="small">
                    <Room fontsize="small" htmlColor="green"/>
                    <Typography variant="body3">
                        Location
                    </Typography>
                </Button>
                <Button size="small">
                    <EmojiEmotions fontSize="small" htmlColor="goldenrod"/>
                    <Typography variant="body3">
                        Feeling
                    </Typography>
                </Button>
                <Button size="small" variant="contained" color="success">
                    <Send fontSize="small" />
                    <Typography>
                        Post
                    </Typography>
                </Button>
            </div>
        </Paper>
    );
};

export default Post;