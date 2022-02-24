import { Avatar, Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const UserCard = () => {
    return(
        <Card>
            <CardMedia
                component="img"
                src="/assets/cover/cover.jpg"
                    
            />
            <Grid container direction="column" sx={{ alignItems: "center", mt: -7 }}>
                <Avatar src="/assets/person/diana.jpg" sx={{ width: 95, height: 95 }}/>
                <Typography variant="h2" sx={{ fontWeight: 500, fontSize: "20px" }}>
                    Diana Ayi
                </Typography>
                <CardContent>
                <Typography variant="body2" color="text.secondary">
                    User Interface Designer and Front-End Developer
                </Typography>
                </CardContent>
                <Button variant="outlined" fullWidth>
                    Recruit
                </Button>
            </Grid>
        </Card>
    )
}

export default UserCard;