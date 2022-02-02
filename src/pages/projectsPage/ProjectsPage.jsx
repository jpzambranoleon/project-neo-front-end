import { Box, Grid } from "@mui/material";
import Navbar from "../../components/Navbar";
import { makeStyles } from "@mui/styles";
import ProjectBox from "./components/ProjectBox";

const useStyles = makeStyles((theme) => ({
    boxContainer: {
        width: "80%",
        margin:"0 auto",

        [theme.breakpoints.down("sm")]: {
            width: "100%"
        }
    },
}))

export default function ProjectsPage() {
    const classes = useStyles();
    return (
        <div>
            <Navbar />
            <Box className={classes.boxContainer}>
                <Grid container>
                    <Grid item sm={12}>
                        <ProjectBox />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}