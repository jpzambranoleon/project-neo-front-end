import { Avatar, Box, CardMedia, Container, IconButton, Tooltip, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";
import ContactInfo from "./ContactInfo";
import EditButton from "./EditButton";

const UserInfo = () => {
    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAlert(false);
    };

    return (
        <>
            <CardMedia 
                component="img"
                height="160"
                image="/assets/cover/cover.jpg"
            />
            <Container sx={{ mt: -10 }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Tooltip title="Change Photo" placement="top">
                        <IconButton sx={{ p: 0 }}>
                            <Avatar src="/assets/person/diana.jpg" sx={{ width: 150, height: 150 }}/>
                        </IconButton>
                    </Tooltip>
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
                <ContactInfo />
            </Container>
        </>
    );
};

export default UserInfo;