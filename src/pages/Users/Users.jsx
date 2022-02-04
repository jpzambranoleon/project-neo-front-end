import { Box, Grid, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import ProfileCard from "../homePage/components/ProfileCard";
import { makeStyles } from "@mui/styles";
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

export default function Users() {
    const classes = useStyles()
    return (
        <div>
            <Navbar />
                <Box className={classes.boxContainer}>
                <Grid container spacing={2}>
                    <Grid item sm={3}>
                        <ProfileCard />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}