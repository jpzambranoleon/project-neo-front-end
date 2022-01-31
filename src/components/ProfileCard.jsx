import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
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
            <CardContent>
                <Avatar alt="Diana Ayi" src="/assets/person/diana.jpg" />
                <Typography variant="h5">
                    Diana Ayi
                    <Typography variant="h6" sx={{ color: "grey" }}>
                        @dayi
                    </Typography>
                </Typography>
            </CardContent>
            <CardContent>
                <Typography variant="body2">
                    User Interface Designer and
                    Front-End Developer
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">
                    Button 1
                </Button>
                <Button size="small">
                    Button 2
                </Button>
                <Button size="small">
                    Button 3
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProfileCard;