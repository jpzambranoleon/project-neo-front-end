import { Copyright, LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Container, CssBaseline, Grid, ThemeProvider, Typography } from "@mui/material";


export default function UploadProfilePic() { 
    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Pick a Profile Picture
            </Typography>
            <Box sx={{ mt: 3 }}>
                <Avatar sx={{ width: 156, height: 156 }} src="broken-img.jpg" />
            </Box>
          </Box>
          <Grid container justifyContent="space-between">
                <Button>
                    Skip for now
                </Button>
                <Button>
                    Next
                </Button>
          </Grid>
        </Container>
    );
  }