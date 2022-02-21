import { Box, CardActionArea, CardContent, CardMedia, List, ListItemButton, Paper, Typography } from "@mui/material";

const News = () => {
    return (
        <Paper sx={{ mb: 2 }}>
            <CardActionArea sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                        News
                    </Typography>
                    <Typography component="div">
                        Project-NEO goes live!
                    </Typography>
                    <Typography sx={{ fontSize: 12 }} color="text.secondary">
                        12.5k Likes
                    </Typography>
                </CardContent>
                <CardContent>
                <CardMedia 
                    component="img"
                    src="/assets/background/loginBackground.jpg"
                    sx={{ height: 50, width: 50, borderRadius: 1 }}
                />
                </CardContent>
            </CardActionArea>
        </Paper>
    );
};

export default News;