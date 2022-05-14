import { Grid } from "@mui/material";
import Description from "./components/Description";


export default function Profile() {
  return (
    <>
      <Grid item sm={6}>
        <Description />
      </Grid>
    </>
  );
}
