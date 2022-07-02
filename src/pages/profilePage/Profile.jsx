import { AccountCircle, Wallpaper } from "@mui/icons-material";
import { Avatar, Box, CardContent, CardMedia, Chip, Container, Divider, Grid, IconButton, Paper, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import EditProfileButton from "./components/EditProfileButton";

const skills = [
  {
    title: 'javascript'
  },
  {
    title: 'nodejs'
  },
  {
    title: 'react'
  },
  {
    title: 'full stack web developer'
  },
  {
    title: 'html'
  },
  {
    title: 'css'
  },
  {
    title: 'python'
  }
]

export default function Profile() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper>
      <CardMedia 
        component="img"
        height="160"
        image="/assets/post/post5.jpg"
        sx={{ borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
      />
      <Container sx={{ mt: -12 }}>
        <Grid container align="center">
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Avatar alt="Diana Ayi" src="/assets/person/diana.jpg" sx={{ width: 150, height: 150, }} />
          </Grid>
        </Grid>
        <Typography gutterBottom variant="h4" align="center">
          Diana Ayi
        </Typography>
        <Typography variant="body1" color="text.primary">
          Full Stack Web Developer at Leone Digitale
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          Tokyo, Japan
        </Typography>
        <Stack direction="row" gap={1}>
          <EditProfileButton />
          <IconButton size="small" color="primary">
            <AccountCircle fontSize="small" color="primary" />
          </IconButton>
          <IconButton size="small" color="primary">
            <Wallpaper fontSize="small" color="primary" />
          </IconButton>
        </Stack>
      </Container>
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Box>
      <Box sx={{ width: '100%' }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            About
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet explicabo consequatur optio itaque quisquam doloremque, neque iure culpa minima atque architecto at voluptatum velit nam eligendi officia dolorem in!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque labore nobis eum culpa sed corrupti dignissimos earum, inventore omnis iure at deserunt animi voluptatibus commodi quia! Eum, vero? Et, eos.
          </Typography>
        </CardContent>
      </Box>
      <Divider />
      <Box sx={{ width: '100%' }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Skills
          </Typography>
          {skills.map((skill) => (
              <Chip 
                label={skill.title}
                component="a"
                href="#basic-chip"
                clickable
                sx={{ mr: 2, mb: 1 }}
              />
          ))}
        </CardContent>
      </Box>
    </Paper>
  );
}
