import { Box, Grid } from "@mui/material";
import Feed from "../../components/Feed";

export default function Home() {
  return (
    <>
      <Grid item sm={6}>
        <Box>
          <Feed />
        </Box>
      </Grid>
    </>
  );
}
