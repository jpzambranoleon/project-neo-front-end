import { Box, Grid, styled } from "@mui/material";
import Navbar from "../../components/Navbar";
import Description from "./components/Description";
import Sidebar from "../../components/Sidebar";
import User from "../../components/User";
import Images from "./components/Images";
import News from "../../components/News";

const CustomBox = styled(Box)(({ theme }) => ({
  width: "80%",
  margin: "0 auto",
  marginTop: theme.spacing(10),
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginTop: theme.spacing(4),
  },
}));

export default function Profile() {
  return (
    <>
      <Grid item sm={6}>
        <Description />
      </Grid>
    </>
  );
}
