import { Grid, Box } from "@mui/material";
import User from "../User";
import Sidebar from "../Sidebar";

export default function SideMenu() {
  return (
    <>
      <Grid item sm={3}>
        <Box>
          <User />
          <Sidebar />
        </Box>
      </Grid>
    </>
  );
}
