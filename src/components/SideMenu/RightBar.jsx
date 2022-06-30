import { Grid, Box } from "@mui/material";
import News from "../News";
import Tags from "../Tags";

export default function RightBar() {
  return (
    <Box>
      <News />
      <Tags />
    </Box>
  );
}
