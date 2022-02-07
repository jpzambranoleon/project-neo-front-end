import { Box, Grid } from "@mui/material";
import Navbar from "../../components/Navbar";
import { makeStyles } from "@mui/styles";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Post from "./components/Post";
import ProfileCard from "./components/ProfileCard";
import UserCard from "./components/UserCard";

const useStyles = makeStyles((theme) => ({
    boxContainer: {
        width: "80%",
        margin:"0 auto",
        marginTop: theme.spacing(10),

        [theme.breakpoints.down("sm")]: {
            width: "100%"
        }
    },
}))


export default function Home() {
    const classes = useStyles();
    return (
        <div>
            <Navbar />
            <Box className={classes.boxContainer}>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item sm={3}>
                        <Box>
                            <UserCard />
                            <Sidebar />
                        </Box>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Box>
                            <Post />
                            <Feed />
                        </Box>
                    </Grid>
                    <Grid item sm={3}>
                        <Box>
                            <ProfileCard />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}