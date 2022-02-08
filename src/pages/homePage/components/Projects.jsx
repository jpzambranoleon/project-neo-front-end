import { MoreVert } from "@mui/icons-material";
import { Avatar, Box, CardContent, CardHeader, CardMedia, Container, Divider, IconButton, ListItem, ListItemAvatar, ListItemButton, Typography } from "@mui/material";

const Projects = () => {
    return (
        <Box sx={{ bgcolor: "white", mt: 3 }}>
            <ListItem>
                <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "20px" }}>
                    Interesting Projects
                </Typography>
            </ListItem>
            <Divider />
            <CardHeader 
                avatar={
                    <Avatar src="/assets/person/diana.jpg"/>
                }
                title="Project-NEO"
                subheader="5 hours ago"
                action={
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                }
            />
            <CardMedia 
                component="img"
                height="140"
                image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
                alt="Nicola Sturgeon on a TED talk stage"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary" component="p">
                    Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:
                </Typography>
            </CardContent>
        </Box>
    );
};

export default Projects;