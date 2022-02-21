import { Box, CardMedia, ListItemButton, Paper, Typography } from "@mui/material";

const News = () => {
    return (
        <Paper sx={{ mb: 2 }}>
            <Typography>
                What Might Interest You
            </Typography>
            <ListItemButton>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    News
                </Typography>
                <Box>
                    <CardMedia 
                        component="img"
                        image="/assets/background/loginBackground.jpg"
                        sx={{ maxHeight: 50 }}
                    />
                </Box>
            </ListItemButton>
        </Paper>
    );
};

export default News;