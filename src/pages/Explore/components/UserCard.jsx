import { Add, GitHub, Google, LinkedIn, Send } from "@mui/icons-material";
import { Avatar, Box, Button, ButtonGroup, Card, CardActionArea, CardContent, CardMedia, Container, Grid, IconButton, ListItem, Stack, Typography } from "@mui/material";

const UserCard = () => {
    return(
        <Card>
            <CardMedia
                component="img"
                src="/assets/cover/cover.jpg"
                    
            />
            <Grid container direction="column" sx={{ alignItems: "center", mt: -7 }}>
                <Avatar src="/assets/person/diana.jpg" sx={{ width: 100, height: 100 }}/>
                <Typography variant="h2" sx={{ fontWeight: 500, fontSize: "20px" }}>
                    Diana Ayi
                </Typography>
                <CardContent>
                <Typography variant="body2" color="text.secondary">
                    User Interface Designer and Front-End Developer
                </Typography>
                </CardContent>
                <CardContent>
                    <Button variant="outlined" sx={{ width: 170 }}>
                        Recruit
                    </Button>
                </CardContent>
            </Grid>
        </Card>
    )
}

export default UserCard;