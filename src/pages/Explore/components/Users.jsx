import { Box, Grid, ListItem } from "@mui/material";
import UserCard from "./UserCard";
// import { makeStyles } from "@mui/styles";

const Users = () => {
  //   const classes = useStyles();

  return (
    <Box
      sx={{ bgcolor: "white" }}
      //   className={classes.box}
    >
      <ListItem>
        <Grid container spacing={2}>
          <Grid item sm={3} xs={6}>
            <UserCard />
          </Grid>
          <Grid item sm={3} xs={6}>
            <UserCard />
          </Grid>
          <Grid item sm={3} xs={6}>
            <UserCard />
          </Grid>
          <Grid item sm={3} xs={6}>
            <UserCard />
          </Grid>
        </Grid>
      </ListItem>
      <ListItem>
        <Grid container spacing={2}>
          <Grid item sm={3} xs={6}>
            <UserCard />
          </Grid>
          <Grid item sm={3} xs={6}>
            <UserCard />
          </Grid>
          <Grid item sm={3} xs={6}>
            <UserCard />
          </Grid>
          <Grid item sm={3} xs={6}>
            <UserCard />
          </Grid>
        </Grid>
      </ListItem>
    </Box>
  );
};

// const useStyles = makeStyles((theme) => ({
//   box: {
//     backgroundColor: "white",
//     "& .MuiCardMedia-root": {
//       width: 10,
//     },
//   },
// }));

export default Users;
