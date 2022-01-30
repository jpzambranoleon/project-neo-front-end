import { Box, Grid } from "@mui/material";
import Leftbar from "../../components/Leftbar";
import Middlebar from "../../components/Middlebar";
import Navbar from "../../components/Navbar";
import Rightbar from "../../components/Rightbar";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Box sx={{ gridTemplateColumns: "18vw auto 20vw", columnGap: "2rem", position: "relative" }}>
                <Grid container sx={{ width: "80%", margin: "0 auto"}}>
                    <Grid item sm={3}>
                        <Leftbar />
                    </Grid>
                    <Grid item sm={6}>
                        <Middlebar />
                    </Grid>
                    <Grid item sm={3}>
                        <Rightbar />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}