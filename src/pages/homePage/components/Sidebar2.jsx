import { alpha, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    boxContainer: {
        padding: "20px 20px",
        borderRadius: "30px",
        cursor: "pointer",
        backgroundColor: alpha("#e9ecef", 1),
        '& hover': {
            backgroundColor: "red",
        }
    },
    link: {
        display: "flex",
        alignItems: "cover",
    }
}));

const Sidebar2 = () => {
    const classes = useStyles();
    return (
        <Box bgcolor="white" sx={{ mt: 3, width: "250px", minWidth: "250px", margin: "20px auto 0 auto" }}>
            <Box className={classes.boxContainer}>
                <div className={classes.link}>
                <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "20px"}}>
                    Home
                </Typography>
                </div>
            </Box>
            <Box className={classes.boxContainer}>
                <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "20px"}}>
                    Explore
                </Typography>
            </Box>
            <Box className={classes.boxContainer}>
                <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "20px"}}>
                    Explore
                </Typography>
            </Box>
            <Box className={classes.boxContainer}>
                <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "20px"}}>
                    Notifications
                </Typography>
            </Box>
            <Box className={classes.boxContainer}>
                <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "20px"}}>
                    Messages
                </Typography>
            </Box>
            <Box className={classes.boxContainer}>
                <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "20px"}}>
                    Bookmarks
                </Typography>
            </Box>
            <Box className={classes.boxContainer}>
                <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "20px"}}>
                    Lists
                </Typography>
            </Box>
            <Box className={classes.boxContainer}>
                <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "20px"}}>
                    Profile
                </Typography>
            </Box>
            <Box className={classes.boxContainer}>
                <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "20px"}}>
                    More
                </Typography>
            </Box>
        </Box>
    )
};

export default Sidebar2;