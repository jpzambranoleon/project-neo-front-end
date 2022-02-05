import { Avatar, Box, Button, Grid, TextField, Typography, Container } from "@mui/material";

const Description = () => {
    return (
        <Box component="main">
            <Box sx={{ bgcolor: 'white' }}>
                <Container>
                    <Avatar src="/assets/person/diana.jpg" sx={{ width: 140, height: 140 }}/>
                    <Typography component="h1" variant="h4">
                        Diana Ayi
                    </Typography>
                    <Typography variant="body2">
                        User Interface Designer and Front-End Developer
                    </Typography>
                </Container>
                <Box sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Container>
                            <Typography variant="h5">
                                About
                            </Typography>
                            <Typography variant="body2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Id, dolorum quae aliquam explicabo a in tenetur at. 
                                Deserunt explicabo quis quaerat dolorem id iusto delectus, neque asperiores! 
                                Tenetur, facere culpa. Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Voluptates asperiores magnam natus nisi officiis, 
                                reprehenderit aperiam deserunt atque maxime at iusto, consequuntur esse, 
                                ipsa fugit blanditiis praesentium laudantium rem distinctio?
                            </Typography>
                            </Container>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default Description;