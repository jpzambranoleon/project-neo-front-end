import { Grid, Paper, Typography } from "@mui/material";
import Description from "./components/Description";


export default function Profile() {
  return (
    <Grid item sm={6}>
      <Paper>
        <Typography>
          Hello There
        </Typography>
      </Paper>
    </Grid>
  );
}
