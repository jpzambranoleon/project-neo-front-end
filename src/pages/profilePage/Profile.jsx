import { Box, Grid } from "@mui/material";
import Navbar from "../../components/Navbar";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";


export default function Profile() {
    return (
        <div>
            <Navbar />
            <Box sx={{ gridTemplateColumns: "18vw auto 20vw", columnGap: "2rem", position: "relative" }}>
                <Grid container sx={{ width: "80%", margin: "0 auto"}}>
                    <Grid item sm={8}>
                        <Leftbar />
                    </Grid>
                    <Grid item sm={4}>
                        <Rightbar />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}