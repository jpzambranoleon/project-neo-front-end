import { Box, Grid } from "@mui/material";
import Navbar from "../../components/Navbar";
import { makeStyles } from "@mui/styles";
import Feed from "./components/Feed";
import Post from "./components/Post";
import Sidebar from "../../components/Sidebar";
import Follow from "./components/Follow";
import Projects from "./components/Projects";
import User from "../../components/User";

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
                            <User />
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
                           <Follow />
                           <Projects /> 
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}