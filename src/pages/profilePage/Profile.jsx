import { Box, Grid } from "@mui/material";
import Navbar from "../../components/Navbar";
import { makeStyles } from "@mui/styles";
import ProfileCard from "../homePage/components/ProfileCard";
import User from "./components/User";

const useStyles = makeStyles((theme) => ({
    boxContainer: {
        width: "75%",
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
                    <Grid item sm={9}>
                        <Box>
                            <User />
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