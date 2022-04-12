import { Grid, Box } from "@mui/material";
import News from "../News";
import Tags from "../Tags";

export default function RightBar() {
  return (
    <>
      <Grid item sm={3}>
        <Box>
          <News />
          <Tags />
        </Box>
      </Grid>
    </>
  );
}
