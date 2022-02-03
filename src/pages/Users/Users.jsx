import { Box, Grid } from "@mui/material";
import Navbar from "../../components/Navbar";
import ProfileCard from "../homePage/components/ProfileCard";
import DisplayUsers from "./components/DisplayUsers";
import FilterBox from "./components/FilterBox";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    boxContainer: {
        width: "80%",
        margin:"0 auto",

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
                <Grid container>
                    <Grid item sm={3}>
                        <FilterBox />
                    </Grid>
                    <Grid item sm={3}>
                        <DisplayUsers />
                    </Grid>
                    <Grid item sm={3}>
                        <DisplayUsers />
                    </Grid>
                    <Grid item sm={3}>
                        <DisplayUsers />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}