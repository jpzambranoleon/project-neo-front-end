import { Box, Grid } from "@mui/material";
import Navbar from "../../components/Navbar";


export default function Profile() {
    return (
        <div>
            <Navbar />
            <Box sx={{ gridTemplateColumns: "18vw auto 20vw", columnGap: "2rem", position: "relative" }}>
                <Grid container sx={{ width: "80%", margin: "0 auto"}}>
                    <Grid item sm={8}>
                        <div>Left</div>
                    </Grid>
                    <Grid item sm={4}>
                        <div>Right</div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}