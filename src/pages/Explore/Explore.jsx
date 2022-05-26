import { Box, Grid,} from "@mui/material";
import SearchBar from "./components/SearchBar";
import Users from "./components/Users";

export default function Explore() {
  return (
    <>
        <Grid item sm={9}>
            <SearchBar />
            <Box>
              <Users />
            </Box>
        </Grid>
    </>
  );
}
