import { Card, CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    profileCard: {
        [theme.breakpoints.down("sm")]: {
            display: "none",
        }
    },
}));

const ProfileCard = () => {
    const classes = useStyles();
    return (
        <Card className={classes.profileCard} sx={{ mr: 3 }}>
            <CardMedia 
                component="img"
                height="140"
                image="/assets/cover/cover.jpg"
            />
        </Card>
    );
};

export default ProfileCard;