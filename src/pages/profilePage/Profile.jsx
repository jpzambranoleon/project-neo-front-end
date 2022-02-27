import { Box, Grid, styled } from "@mui/material";
import Navbar from "../../components/Navbar";
import Description from "./components/Description";
import Sidebar from "../../components/Sidebar";
import Friends from "./components/Friends";
import User from "../../components/User";
import Images from "./components/Images";
import News from "../../components/News";

const CustomBox = styled(Box)(({ theme }) => ({
    width: '80%',
    margin: '0 auto',
    marginTop: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
        width: '100%'
    }
}));

export default function Profile() {
    
    return (
        <div>
            <Navbar />
            <CustomBox>
                <Grid container spacing={3}>
                    <Grid item sm={3}>
                        <Box>
                            <User />
                            <Sidebar />
                        </Box>
                    </Grid>
                    <Grid item sm={6}>
                        <Description />
                    </Grid>
                    <Grid item sm={3}>
                        <Images />
                        <News />
                        <Friends />
                    </Grid>
                </Grid>
            </CustomBox>
        </div>
    );
}