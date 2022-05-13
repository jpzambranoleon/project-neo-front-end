import { Close, Edit } from "@mui/icons-material";
import { Box, Typography, Container, CardContent, Button, IconButton, ListItem, Tabs, Tab, Tooltip, Modal, styled, TextField, Divider} from "@mui/material";
import { useState } from "react";
import UserInfo from "./UserInfo";

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
                <UserInfo />
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab sx={{ textTransform: 'none' }} label="About" />
                        <Tab sx={{ textTransform: 'none' }} label="Posts" />
                        <Tab sx={{ textTransform: 'none' }} label="Projects" />
                        <Tab sx={{ textTransform: 'none' }} label="Bookmarks" />
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