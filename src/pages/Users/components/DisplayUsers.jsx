import { Box, Card, Grid } from "@mui/material"
import ProfileCard from "../../homePage/components/ProfileCard";

const DisplayUsers = () => {
    return (
        <Box sx={{ display: "flex", paddingTop: 10 }}>
            <ProfileCard />
        </Box>
    );
};

export default DisplayUsers;