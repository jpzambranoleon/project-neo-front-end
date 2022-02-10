import { Add, GitHub, Google, LinkedIn, Send } from "@mui/icons-material";
import { Avatar, Box, Button, ButtonGroup, Card, CardContent, Grid, IconButton, ListItem, Stack, Typography } from "@mui/material";

const Users = () => {
    return (
        <Box sx={{ bgcolor: "white" }}>
            <Grid container>
                <Grid item sm={3}>
                    <Card>
                        <CardContent>
                            <Grid container direction="column" sx={{ alignItems: "center" }}>
                                <Avatar sx={{ width: 120, height: 120 }} src="/assets/person/diana.jpg"/>
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
                </Grid>
                <Grid item sm={3}>
                    <Card>
                        <Typography>
                            Hello
                        </Typography>
                    </Card>
                </Grid>
                <Grid item sm={3}>
                    <Card>
                        <Typography>
                            Hello
                        </Typography>
                    </Card>
                </Grid>
                <Grid item sm={3}>
                    <Card>
                        <Typography>
                            Hello
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Users;