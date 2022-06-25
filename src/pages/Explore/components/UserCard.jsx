import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const UserCard = () => {
    return(
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
                <Grid container align="center">
                    <Grid item xs={12}>
                        <Avatar alt="Diana Ayi" src="/assets/person/diana.jpg" sx={{ width: 90, height: 90 }} />
                    </Grid>
                </Grid>
                <Typography gutterBottom variant="h6" align="center">
                    Diana Ayi
                </Typography>
                <Typography variant="body2" align="center">
                    This is a media card. You can use this section to describe the
                    content.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">View</Button>
                <Button size="small">Edit</Button>
            </CardActions>
        </Card>
    )
}

export default UserCard;