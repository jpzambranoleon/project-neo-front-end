import { Add, GitHub, Google, LinkedIn, Send } from "@mui/icons-material";
import { Avatar, Box, Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Stack, Typography } from "@mui/material";


const ProfileCard = () => {
    return (
        <Card sx={{ ml: 3, maxWidth: 300 }}>
            <CardMedia 
                component="img"
                height="110"
                image="/assets/cover/cover.jpg" 
            />
            <CardContent sx={{ mt: -9 }}>
                <Grid container direction="column" sx={{ alignItems: "center" }}>
                    <Avatar sx={{ width: 100, height: 100 }} src="/assets/person/diana.jpg"/>
                    <CardContent>
                        <Typography variant="h5">
                            Diana Ayi
                        </Typography>
                    </CardContent>
                    <Typography variant="body2">
                        User Interface Designer and Front-End Developer
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                        <IconButton size="small">
                            <LinkedIn fontSize="small"/>
                        </IconButton>
                        <IconButton size="small">
                            <Google fontSize="small"/>
                        </IconButton>
                        <IconButton size="small">
                            <GitHub fontSize="small"/>
                        </IconButton>
                    </Box>
                    <CardContent>
                        <Stack spacing={2} direction="row">
                            <Button size="small" variant="contained">
                                <Send fontSize="small" />
                                Message
                            </Button>
                            <Button size="small" variant="contained">
                                <Add fontSize="small" />
                                Recruit
                            </Button>
                        </Stack>
                    </CardContent>
                    <Box>
                        <ButtonGroup variant="text" size="small">
                            <Button>
                                Button 1
                            </Button>
                            <Button>
                                Button 2
                            </Button>
                            <Button>
                                Button 3
                            </Button>
                        </ButtonGroup>
                    </Box>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ProfileCard;