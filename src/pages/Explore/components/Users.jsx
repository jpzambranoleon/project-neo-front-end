import { Box, Grid, ListItem } from "@mui/material";
import UserCard from "./UserCard";

const Users = () => {
    return (
        <Box sx={{ bgcolor: "white" }}>
            <ListItem>
                <Grid container spacing={2}>
                    <Grid item sm={3} xs={6}>
                        <UserCard />
                    </Grid>
                    <Grid item sm={3} xs={6}>
                        <UserCard/>
                    </Grid>
                    <Grid item sm={3} xs={6}>
                        <UserCard />
                    </Grid>
                    <Grid item sm={3} xs={6}>
                        <UserCard />
                    </Grid>
                </Grid>
            </ListItem>
            <ListItem>
                <Grid container spacing={2}>
                    <Grid item sm={3}>
                        <UserCard />
                    </Grid>
                    <Grid item sm={3}>
                        <UserCard/>
                    </Grid>
                    <Grid item sm={3}>
                        <UserCard />
                    </Grid>
                    <Grid item sm={3}>
                        <UserCard />
                    </Grid>
                </Grid>
            </ListItem>
        </Box>
    );
};

export default Users;