import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    card: {
        marginRight: theme.spacing(3),
        [theme.breakpoints.down("sm")]: {
            marginRight: theme.spacing(0),
        }
    },
}))

const User = () => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia 
                component="img"
                height="200"
                image="/assets/cover/cover.jpg"
            />
            <CardContent sx={{  }}>
                <Avatar alt="Diana Ayi" src="/assets/person/diana.jpg" sx={{  }}/>
                <Typography variant="h5">
                    Diana Ayi
                    <Typography variant="h6" sx={{ color: grey[500] }}>
                        @dayi
                    </Typography>
                </Typography>
            </CardContent>
            <CardContent sx={{  }}>
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

export default User;