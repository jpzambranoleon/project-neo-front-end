import { Box, CardActionArea, CardContent, CardMedia, ListItemButton, Paper, Typography } from "@mui/material";

const News = () => {
    return (
        <Paper sx={{ mb: 2 }}>
            <CardActionArea sx={{ display: 'flex' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                        News
                    </Typography>
                    <Typography component="div">
                        Project Neo goes live!
                    </Typography>
                    <Typography sx={{ fontSize: 12 }} color="text.secondary">
                        12.0K Likes
                    </Typography>
                </CardContent>
                <CardContent>
                <CardMedia 
                    component="img"
                    src="/assets/background/loginBackground.jpg"
                    sx={{ height: 50 }}
                />
                </CardContent>
            </CardActionArea>
        </Paper>
    );
};

export default News;