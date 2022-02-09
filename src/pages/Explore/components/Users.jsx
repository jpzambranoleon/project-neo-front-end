import { Box, Card, CardContent, Grid, ListItem, Typography } from "@mui/material";

const Users = () => {
    return (
        <Box sx={{ bgcolor: "white" }}>
            <Grid container>
                <Grid item sm={3}>
                    <Card>
                        <Typography>
                            Hello
                        </Typography>
                    </Card>
                </Grid>
                <Grid item sm={3}>
                    <Card>
                        <Typography>
                            Hello
                        </Typography>
                    </Card>
                </Grid>
                <Grid item sm={3}>
                    <Card>
                        <Typography>
                            Hello
                        </Typography>
                    </Card>
                </Grid>
                <Grid item sm={3}>
                    <Card>
                        <Typography>
                            Hello
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Users;