import { Box, Grid, styled } from "@mui/material";
import Navbar from "../../components/Navbar";
import Feed from "./components/Feed";
import Post from "./components/Post";
import Sidebar from "../../components/Sidebar";
import User from "../../components/User";
import Tags from "./components/Tags";
import News from "../../components/News";
import Add from "./components/Add";

const CustomBox = styled(Box)(({ theme }) => ({
    width: '80%',
    margin: '0 auto',
    marginTop: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
        width: '100%',
        marginTop: theme.spacing(5)
    }
}));

export default function Home() {
    return (
        <div>
            <Navbar />
            <CustomBox>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item sm={3}>
                        <Box>
                            <User />
                            <Sidebar />
                        </Box>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Box>
                            <Post />
                            <Feed />
                            <Feed />
                        </Box>
                    </Grid>
                    <Grid item sm={3}>
                        <Box>
                            <News />
                            <Tags />
                        </Box>
                    </Grid>
                </Grid>
            </CustomBox>
            <Add />
        </div>
    );
}