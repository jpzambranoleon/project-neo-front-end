import { Box, Grid, Paper, styled, TextField } from "@mui/material";
import Navbar from "../../components/Navbar";
import Users from "./components/Users";

export default function Explore() {
  return (
    <>
      <Grid item sm={9}>
        <Box>
          <Users />
        </Box>
      </Grid>
    </>
  );
}
