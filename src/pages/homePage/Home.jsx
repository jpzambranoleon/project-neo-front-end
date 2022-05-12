import { Box, Grid, styled } from "@mui/material";
import Navbar from "../../components/Navbar";
import Feed from "./components/Feed";
import Post from "./components/Post";
import Sidebar from "../../components/Sidebar";
import User from "../../components/User";
import News from "../../components/News";
import Add from "./components/Add";

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
