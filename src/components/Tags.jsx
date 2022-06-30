import { Box, Button, Paper, Typography } from "@mui/material";

const Tags = () => {
  return (
    <Box>
      <Paper sx={{ mt: 2 }}>
        <Typography gutterBottom sx={{ ml: 1 }}>
          Categories
        </Typography>
        <Box sx={{ ml: 1 }}>
          <Button variant="outlined" sx={{ textTransform: "none", mb: 1, mr: 1 }}>
            JavaScript
          </Button>
          <Button variant="outlined" sx={{ textTransform: "none", mb: 1, mr: 1 }}>
            CSS
          </Button>
          <Button variant="outlined" sx={{ textTransform: "none", mb: 1, mr: 1 }}>
            React
          </Button>
          <Button variant="outlined" sx={{ textTransform: "none", mb: 1, mr: 1 }}>
            Front-End Development
          </Button>
          <Button variant="outlined" sx={{ textTransform: "none", mb: 1, mr: 1 }}>
            Project-Neo
          </Button>
          <Button variant="outlined" sx={{ textTransform: "none", mb: 1, mr: 1 }}>
            Web3
          </Button>
          <Button variant="outlined" sx={{ textTransform: "none", mb: 1, mr: 1 }}>
            MUI
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Tags;
