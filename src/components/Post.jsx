import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";
import { Button, Card, InputBase } from "@mui/material";

const Post = () => {
    return (
        <Card>
            <div>
                <InputBase placeholder="What's on your mind, Diana?" />
            </div>
            <div>
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