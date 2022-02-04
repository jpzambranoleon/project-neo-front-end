import { Box } from "@mui/material"
import Feed from "./Feed";
import Post from "./Post";

const Middlebar = () => {
    return (
        <Box>
            <Post />
            <Feed />
        </Box>
    );
};

export default Middlebar;