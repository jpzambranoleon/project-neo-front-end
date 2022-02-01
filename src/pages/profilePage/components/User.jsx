import { EditOutlined } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        marginRight: theme.spacing(3),

        [theme.breakpoints.down("sm")]: {
            marginRight: theme.spacing(0),
        }
    },
    userContent: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: theme.spacing(-9)
    },
}))

const User = () => {
    const classes = useStyles();
    return (
        <Card className={classes.cardContainer}>
            <CardMedia 
                component="img"
                height="200"
                image="/assets/cover/cover.jpg"
            />
            <CardContent>
                <div className={classes.userContent}>
                    <Avatar  alt="Diana Ayi" src="/assets/person/diana.jpg" sx={{ width: 160, height: 160, top: -50 }}/>
                    <CardActions>
                        <IconButton>
                            <EditOutlined />
                        </IconButton>
                    </CardActions>
                </div>
                <Typography variant="h4" sx={{ mt: -4 }}>
                    Diana Ayi
                    <Typography variant="h5" sx={{ color: grey[500] }}>
                        @dayi
                    </Typography>
                </Typography>
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Typography variant="body2">
                    User Interface Designer and
                    Front-End Developer
                </Typography>
            </CardContent>
        </Card>
    );
};

export default User;