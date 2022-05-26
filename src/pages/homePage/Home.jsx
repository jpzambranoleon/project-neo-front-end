import { Box, Grid } from "@mui/material";
import Feed from "./components/Feed";
import Post from "./components/Post";


export default function Home() {
  return (
    <>
      <Grid item sm={6}>
        <Box>
          <Post />
          <Feed />
          <Feed />
        </Box>
      </Grid>
    </>
  );
}
