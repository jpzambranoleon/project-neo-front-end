import { Edit } from "@mui/icons-material";
import { Avatar, Box, Typography, Container, CardMedia, CardContent, Button, IconButton, ListItem, Tabs, Tab, Tooltip} from "@mui/material";
import { grey } from "@mui/material/colors";
import EditButton from "./EditButton";

const Description = () => {
    return (
        <Box component="main">
            <Box sx={{ bgcolor: 'white' }}>
                <CardMedia
                    component="img"
                    height="160"
                    image="/assets/cover/cover.jpg"
                />
                <Container sx={{ mt: -10 }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Avatar src="/assets/person/diana.jpg" sx={{ width: 150, height: 150 }}/>
                        <EditButton />
                    </Box>
                    <Typography component="h1" variant="h4">
                        Diana Ayi
                    </Typography>
                    <Typography color={grey[500]}>
                        @dayi
                    </Typography>
                    <Typography variant="body2">
                        User Interface Designer and Front-End Developer
                    </Typography>
                    <Typography variant="body2" color={grey[500]}>
                        Tokyo, Japan
                    </Typography>
                    <Button sx={{ mt: 2, fontSize: 10, textTransform: 'none' }} variant="contained" size="small">
                        Contact Info
                    </Button>
                </Container>
                <Tabs centered>
                    <Tab label="About" />
                    <Tab label="Posts" />
                    <Tab label="Projects" />
                    <Tab label="Saved" />
                </Tabs>
            </Box>
            <Box sx={{ mt: 3, bgcolor: "white" }}>
                <Box>
                    <ListItem sx={{ justifyContent: 'space-between' }}>
                        <Typography variant="h5">
                            About
                        </Typography>
                        <Tooltip title="Edit">
                            <IconButton>
                                <Edit />
                            </IconButton>
                        </Tooltip>
                    </ListItem>
                    <CardContent>
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Id, dolorum quae aliquam explicabo a in tenetur at. 
                            Deserunt explicabo quis quaerat dolorem id iusto delectus, neque asperiores! 
                            Tenetur, facere culpa. Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Voluptates asperiores magnam natus nisi officiis, 
                            reprehenderit aperiam deserunt atque maxime at iusto, consequuntur esse, 
                            ipsa fugit blanditiis praesentium laudantium rem distinctio?
                        </Typography>
                    </CardContent>
                </Box>
                <Box>
                    <ListItem>
                        <Typography variant="h5">
                            Skills
                        </Typography>
                    </ListItem>
                    <CardContent>
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Id, dolorum quae aliquam explicabo a in tenetur at. 
                            Deserunt explicabo quis quaerat dolorem id iusto delectus, neque asperiores! 
                            Tenetur, facere culpa. Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Voluptates asperiores magnam natus nisi officiis, 
                            reprehenderit aperiam deserunt atque maxime at iusto, consequuntur esse, 
                            ipsa fugit blanditiis praesentium laudantium rem distinctio?
                        </Typography>
                    </CardContent>
                </Box>
            </Box>
        </Box>
    );
};

export default Description;