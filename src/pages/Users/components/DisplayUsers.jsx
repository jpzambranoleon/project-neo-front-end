import { Box, Card, Grid } from "@mui/material"
import ProfileCard from "../../homePage/components/ProfileCard";

const DisplayUsers = () => {
    return (
        <Grid container>
            <Grid item sm={3}>
                <ProfileCard />
            </Grid>
        </Grid>
    );
};

export default DisplayUsers;