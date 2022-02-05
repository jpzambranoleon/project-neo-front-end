import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, CssBaseline, FormControlLabel, Grid, TextField, Typography, Link, Checkbox, Container, CardMedia } from "@mui/material";

const Description = () => {
    return (
        <Box component="main">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    bgcolor: 'white'
                }}
            >
                <Avatar src="/assets/person/diana.jpg" sx={{ height: 200, width: 200 }}/>
                <Typography component="h1" variant="h4">
                    Diana Ayi
                </Typography>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Container>
                            <Typography variant="h5">
                                About
                            </Typography>
                            <Typography variant="body2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolorum quae aliquam explicabo a in tenetur at. Deserunt explicabo quis quaerat dolorem id iusto delectus, neque asperiores! Tenetur, facere culpa.
                            </Typography>
                            </Container>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Description;