import { Cancel } from "@mui/icons-material";
import { Avatar, Box, Button, Container, Grid, IconButton, Modal, styled, Tooltip, Typography } from "@mui/material";
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

const ProfileImg = () => {
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
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Tooltip title="Change Photo" placement="top">
                    <IconButton sx={{ p: 0 }} onClick={() => setOpen(true)}>
                        <Avatar src="/assets/person/diana.jpg" sx={{ width: 150, height: 150 }}/>
                    </IconButton>
                </Tooltip>
                <EditButton />
            </Box>
            <Modal open={open}>
                <CustomContainer>
                    <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography>
                            Choose Profile Picture
                        </Typography>
                        <IconButton onClick={() => setOpen(false)}>
                            <Cancel />
                        </IconButton>
                    </Box>
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Avatar src="/assets/person/diana.jpg" sx={{ width: 250, height: 250 }}/>
                    </Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2}}>
                        <Button>
                            Cancel
                        </Button>
                        <Button>
                            Save
                        </Button>
                    </Box>
                </CustomContainer>
            </Modal>
        </>
    );
};

export default ProfileImg;