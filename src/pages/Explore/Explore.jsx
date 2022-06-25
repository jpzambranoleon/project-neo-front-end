import { Box, Container, Grid, Paper, Typography,} from "@mui/material";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import Users from "./components/Users";

export default function Explore() {
  return (
    <>
        <Grid item sm={6}>
            <SearchBar />
            <Paper>
              <Container>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <UserCard />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <UserCard />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <UserCard />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <UserCard />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <UserCard />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <UserCard />
                  </Grid>
                </Grid>
              </Container>
            </Paper>
        </Grid>
    </>
  );
}
