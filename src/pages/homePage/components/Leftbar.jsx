import { Box } from "@mui/material"
import { makeStyles } from "@mui/styles";
import ProfileCard from "./ProfileCard";
import Sidebar from "./Sidebar";

const useStyles = makeStyles((theme) => ({
    LeftbarBox: {
        [theme.breakpoints.down("sm")]: {
           // display: "none",
        }
    },
}));

const Leftbar = () => {
    const classes = useStyles();
    return (
        <Box className={classes.LeftbarBox} sx={{ paddingTop: 10 }}>
            <Sidebar />
        </Box>
    );
};

export default Leftbar;