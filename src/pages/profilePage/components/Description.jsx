import { Close, Edit } from "@mui/icons-material";
import { Avatar, Box, Typography, Container, CardMedia, CardContent, Button, IconButton, ListItem, Tabs, Tab, Tooltip, Modal, styled, TextField, Divider} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";
import EditButton from "./EditButton";

const CustomContainer = styled(Container)(({ theme }) => ({
    width: 500,
    height: 550,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        height: "100%"
    }
}));

const Description = () => {
    const [open, setOpen] = useState(false);

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
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
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab sx={{ textTransform: 'none' }} label="About" />
                        <Tab sx={{ textTransform: 'none' }} label="Posts" />
                        <Tab sx={{ textTransform: 'none' }} label="Projects" />
                        <Tab sx={{ textTransform: 'none' }} label="Saved" />
                    </Tabs>
                </Box>
            </Box>
            <Box sx={{ bgcolor: "white" }}>
                <Box>
                    <ListItem sx={{ justifyContent: 'space-between' }}>
                        <Typography variant="h5">
                            About
                        </Typography>
                        <Tooltip title="Edit" onClick={() => setOpen(true)}>
                            <IconButton>
                                <Edit />
                            </IconButton>
                        </Tooltip>
                        <Modal open={open}>
                            <CustomContainer>
                                <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Typography>
                                        About
                                    </Typography>
                                    <IconButton onClick={() => setOpen(false)}>
                                        <Close />
                                    </IconButton>
                                </Box>
                                <TextField 
                                    id="outline-multiline-static"
                                    multiline
                                    rows={5}
                                    variant="outlined"
                                    size="small"
                                    sx={{ mt: 2, width: '100%' }}
                                />
                                <Button sx={{ mt: 2, textTransform: 'none' }} variant="outlined">
                                    Save
                                </Button>
                            </CustomContainer>
                        </Modal>
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
                <Divider />
                <Box>
                    <ListItem>
                        <Typography variant="h5">
                            Skills
                        </Typography>
                    </ListItem>
                    <CardContent>
                        <Button sx={{ mr: 3, textTransform: 'none' }}>
                            JavaScript
                        </Button>
                        <Button sx={{ mr: 3, textTransform: 'none' }}>
                            CSS
                        </Button>
                        <Button sx={{ mr: 3, textTransform: 'none' }}>
                            React
                        </Button>
                        <Button sx={{ mr: 3, textTransform: 'none' }}>
                            Front-End Web Development
                        </Button>
                        <Button sx={{ mr: 3, textTransform: 'none' }}>
                            MUI
                        </Button>
                        <Button sx={{ mr: 3, textTransform: 'none' }}>
                            Node JS
                        </Button>
                    </CardContent>
                </Box>
            </Box>
        </Box>
    );
};

export default Description;