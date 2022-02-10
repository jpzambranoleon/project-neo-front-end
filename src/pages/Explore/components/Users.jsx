import { Add, GitHub, Google, LinkedIn, Send } from "@mui/icons-material";
import { Avatar, Box, Button, ButtonGroup, Card, CardContent, Container, Grid, IconButton, ListItem, Stack, Typography } from "@mui/material";
import UserCard from "./UserCard";

const Users = () => {
    return (
        <Box sx={{ bgcolor: "white" }}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item sm={3}>
                        <UserCard />
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
            </CardContent>
        </Box>
    );
};

export default Users;