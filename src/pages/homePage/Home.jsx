import { Box, Grid } from "@mui/material";
import Leftbar from "./components/Leftbar";
import Middlebar from "./components/Middlebar";
import Navbar from "../../components/Navbar";
import Rightbar from "./components/Rightbar";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    boxContainer: {
        width: "80%",
        margin:"0 auto",
        marginTop: theme.spacing(10),

        [theme.breakpoints.down("sm")]: {
            // width: "100%"
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
                        <Leftbar />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Middlebar />
                    </Grid>
                    <Grid item sm={3}>
                        <Rightbar />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}