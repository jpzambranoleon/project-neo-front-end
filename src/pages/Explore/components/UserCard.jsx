import { Add, GitHub, Google, LinkedIn, Send } from "@mui/icons-material";
import { Avatar, Box, Button, ButtonGroup, Card, CardActionArea, CardContent, CardMedia, Container, Grid, IconButton, ListItem, Stack, Typography } from "@mui/material";

const UserCard = () => {
    return(
        <Card>
            <CardMedia
                component="img"
                src="/assets/cover/cover.jpg"
                    
            />
            <Grid container direction="column" sx={{ alignItems: "center", mt: -8 }}>
                <Avatar src="/assets/person/diana.jpg" sx={{ width: 110, height: 110 }} />
                <Typography variant="h2" sx={{ fontWeight: "500", fontSize: "20px" }}>
                    Diana Ayi
                </Typography>
                <ListItem>
                    <Typography variant="body2" color="text.secondary">
                            User Interface Designer and Front-End Developer
                    </Typography>
                </ListItem>
                <Button variant="outlined" fullWidth>
                    Recruit
                </Button>
            </Grid>
        </Card>
    )
}

export default UserCard;