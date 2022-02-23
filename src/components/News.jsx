import { Box, Button, CardActionArea, CardContent, CardMedia, List, ListItem, ListItemButton, Paper, Typography } from "@mui/material";

const News = () => {
    return (
        <Paper sx={{ mb: 2 }}>
            <Typography sx={{ ml: 1 }}>
                News
            </Typography>
            <CardActionArea sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                        News
                    </Typography>
                    <Typography component="div">
                        Project-NEO goes live!
                    </Typography>
                    <Typography sx={{ fontSize: 12 }} color="text.secondary">
                        12.5K Likes
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
            <CardActionArea sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                        Birthday
                    </Typography>
                    <Typography component="div">
                        Celebrate with Diana!
                    </Typography>
                    <Typography sx={{ fontSize: 12 }} color="text.secondary">
                        102 Likes
                    </Typography>
                </CardContent>
                <CardContent>
                <CardMedia 
                    component="img"
                    src="/assets/person/diana.jpg"
                    sx={{ height: 50, width: 50, borderRadius: 1 }}
                />
                </CardContent>
            </CardActionArea>
            <CardActionArea sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                        Jobs
                    </Typography>
                    <Typography component="div">
                        Front-End Developer Jobs in Austin, TX
                    </Typography>
                    <Typography sx={{ fontSize: 12 }} color="text.secondary">
                        13.7K Likes
                    </Typography>
                </CardContent>
                <CardContent>
                <CardMedia 
                    component="img"
                    src="/assets/post/post5.jpg"
                    sx={{ height: 50, width: 50, borderRadius: 1 }}
                />
                </CardContent>
            </CardActionArea>
            <Button sx={{ textTransform: 'none' }}>
                Show More
            </Button>
        </Paper>
    );
};

export default News;