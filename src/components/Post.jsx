import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";
import { Button, Card, InputBase} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    inputBase: {
        alignItems: "center",
        padding: "0.4rem 1rem",
        marginBottom: theme.spacing(2)
    },
    buttonGroup: {
        marginLeft: theme.spacing(1),
        marginBottom: theme.spacing(2)
    }
}))

const Post = () => {
    const classes = useStyles();
    return (
        <Card>
            <div className={classes.inputBase}>
                <InputBase multiline placeholder="What's on your mind?" sx={{ width: "100%" }}/>
            </div>
            <div className={classes.buttonGroup}>
                <Button size="small">
                    <PermMedia htmlColor="tomato"/>
                    Photo or Video
                </Button>
                <Button size="small">
                    <Label htmlColor="blue"/>
                    Tag
                </Button>
                <Button size="small">
                    <Room htmlColor="green"/>
                    Location
                </Button>
                <Button size="small">
                    <EmojiEmotions htmlColor="goldenrod"/>
                    Feelings
                </Button>
            </div>
        </Card>
    );
};

export default Post;