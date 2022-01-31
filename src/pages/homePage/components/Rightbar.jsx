import { Box } from "@mui/material"
import { makeStyles } from "@mui/styles";
import Projects from "./Projects";

const useStyles = makeStyles((theme) => ({
    RightbarBox: {
        [theme.breakpoints.down("sm")]: {
            display: "none",
        }
    },
}));

const Rightbar = () => {
    const classes = useStyles();
    return (
        <Box className={classes.RightbarBox} sx={{ paddingTop: 10 }}>
            <Projects />
        </Box>
    );
};

export default Rightbar;