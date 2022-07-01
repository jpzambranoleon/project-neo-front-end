import { Avatar, Box, Button, CardContent, Container, Divider, Grid, Paper, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

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
      <Container>
        <Grid container align="center">
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Avatar alt="Diana Ayi" src="/assets/person/diana.jpg" sx={{ width: 150, height: 150 }} />
          </Grid>
        </Grid>
        <Typography gutterBottom variant="h4" align="center">
          Diana Ayi
        </Typography>
        <Typography paragraph variant="body2" color="text.secondary">
          Full Stack Web Developer
        </Typography>
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
          <Typography variant="h5">
            Skills
          </Typography>
          {skills.map((skill) => (
            <Button
              key={skill.title} 
              variant="outlined"
              sx={{ mr: 2, mt: 2 }}
            >
              {skill.title}
            </Button>
          ))}
        </CardContent>
      </Box>
    </Paper>
  );
}
