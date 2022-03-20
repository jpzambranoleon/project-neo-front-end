import { Box, Grid, Paper, styled, TextField } from "@mui/material";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Users from "./components/Users";
import User from "../../components/User";
import SearchBar from "./components/SearchBar";

const CustomBox = styled(Box)(({ theme }) => ({
  width: "80%",
  margin: "0 auto",
  marginTop: theme.spacing(10),
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginTop: theme.spacing(5),
  },
}));

export default function Explore() {
  return (
    <div>
      <CustomBox>
        <Grid container spacing={3}>
          <Grid item sm={3}>
            <Box>
              <User />
              <Sidebar />
            </Box>
          </Grid>
          <Grid item sm={9}>
            <Box>
              <Users />
            </Box>
          </Grid>
        </Grid>
      </CustomBox>
    </div>
  );
}
