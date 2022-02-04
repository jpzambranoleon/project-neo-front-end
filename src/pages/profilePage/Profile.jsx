import { Box, Grid } from "@mui/material";
import Navbar from "../../components/Navbar";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import { makeStyles } from "@mui/styles";

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
                <Grid container>
                    <Grid item sm={9}>
                        <Leftbar />
                    </Grid>
                    <Grid item sm={3}>
                        <Rightbar />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}