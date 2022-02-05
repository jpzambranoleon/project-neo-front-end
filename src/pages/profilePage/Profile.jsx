import { Box, Grid, Paper, TextField } from "@mui/material";
import Navbar from "../../components/Navbar";
import { makeStyles } from "@mui/styles";
import ProfileCard from "../homePage/components/ProfileCard";
import Description from "./components/Description";

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
                            <ProfileCard />
                        </Box>
                    </Grid>
                    <Grid item sm={6}>
                        <Description />
                    </Grid>
                    <Grid item sm={3}>
                        <Description />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}