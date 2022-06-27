import { Avatar, Box, Button, CardActions, CardContent, Container, Divider, Grid, Paper, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import Description from "./components/Description";

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
    <Grid item sm={6} xs={12}>
      <Paper>
        <Container>
          <Avatar alt="Diana Ayi" src="/assets/person/diana.jpg" sx={{ width: 90, height: 90 }} />
          <Typography gutterBottom variant="h4" align="center">
            Diana Ayi
          </Typography>
          <Typography paragraph variant="body2" color="text.secondary">
            Full Stack Web Developer
          </Typography>
        </Container>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </Box>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              About
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet explicabo consequatur optio itaque quisquam doloremque, neque iure culpa minima atque architecto at voluptatum velit nam eligendi officia dolorem in!
            </Typography>
          </CardContent>
        </Box>
        <Divider />
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
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
    </Grid>
  );
}
