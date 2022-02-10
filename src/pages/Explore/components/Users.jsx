import { Add, GitHub, Google, LinkedIn, Send } from "@mui/icons-material";
import { Avatar, Box, Button, ButtonGroup, Card, CardContent, Grid, IconButton, ListItem, Stack, Typography } from "@mui/material";
import UserCard from "./UserCard";

const Users = () => {
    return (
        <Box sx={{ bgcolor: "white" }}>
            <Grid container>
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
        </Box>
    );
};

export default Users;