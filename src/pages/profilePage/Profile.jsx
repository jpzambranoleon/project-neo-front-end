import { Box, Grid, Paper, TextField } from "@mui/material";
import Navbar from "../../components/Navbar";
import { makeStyles } from "@mui/styles";
import Description from "./components/Description";
import Sidebar from "../../components/Sidebar";
import Friends from "./components/Friends";
import Skills from "./components/Skills";
import User from "../homePage/components/User";

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

export default function Profile() {
    const classes = useStyles();
    return (
        <div>
            <Navbar />
            <Box className={classes.boxContainer}>
                <Grid container spacing={3}>
                    <Grid item sm={3}>
                        <Box>
                            <User />
                            <Sidebar />
                        </Box>
                    </Grid>
                    <Grid item sm={6}>
                        <Description />
                        <Skills />
                    </Grid>
                    <Grid item sm={3}>
                        <Friends />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}