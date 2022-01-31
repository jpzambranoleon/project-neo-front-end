import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const User = () => {
    return (
        <Card sx={{ mr: 3 }}>
            <CardMedia 
                component="img"
                height="200"
                image="/assets/cover/cover.jpg"
            />
            <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: -4 }}>
                <Avatar alt="Diana Ayi" src="/assets/person/diana.jpg" sx={{ width: 115, height: 115, bottom: 50 }}/>
                <Typography variant="h5">
                    Diana Ayi
                    <Typography variant="h6" sx={{ color: "grey" }}>
                        @dayi
                    </Typography>
                </Typography>
            </CardContent>
            <CardContent sx={{ mt: -5 }}>
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