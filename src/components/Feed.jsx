import { Box } from "@mui/material";
import { Posts } from "../dummyData";
import Post from "./Post";

export default function Feed() {
    return (
        <Box>
            {Posts.map((p) => (
                <Post key={p.id} post={p} />
            ))}
        </Box>      
    );
};