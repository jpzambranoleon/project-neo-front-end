import { Cancel, PhotoCamera } from "@mui/icons-material";
import { Alert, Avatar, Box, Button, CardMedia, Container, Grid, IconButton, Modal, Snackbar, Stack, styled, TextField, Typography } from "@mui/material";
import { useState } from "react";

const CustomBox = styled(Box)(({ theme }) => ({
    width: 500,
    height: 550,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    overflow: "hidden",
    overflowY: "scroll",
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        height: "100%"
    }
}));

const Input = styled('input')({
    display: 'none',
});

const EditButton = () => {
    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleClose2 = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAlert(false);
    };

    return (
        <>
            <Box sx={{ mt: 8 }}>
                <Button variant="outlined" onClick={handleOpen}>
                    Edit Profile
                </Button>
           </Box>
           <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
           >
                <CustomBox>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1, mb: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton onClick={handleClose} sx={{ ml: 1 }}>
                                <Cancel />
                            </IconButton>
                            <Typography variant="h6" sx={{ ml: 3 }}>
                                Edit Profile
                            </Typography>
                        </Box>
                        <Button sx={{ mr: 2 }} variant="outlined" onClick={() => setOpenAlert(true)}>
                            Save
                        </Button>
                    </Box>
                    <Box>
                        <CardMedia
                            component="img"
                            height="160"
                            image="/assets/cover/cover.jpg"
                        />
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Box sx={{ mt: -23, ml: 25 }}>
                                <label htmlFor="icon-button-file">
                                    <Input accept="image/*" id="icon-button-file" type="file" />
                                    <Button variant="contained" component="span">
                                        Upload
                                    </Button>
                                </label>
                            </Box>
                        </Stack>
                    </Box>
                    <Container sx={{ mt: -8 }}>
                        <Box>
                            <Avatar src="/assets/person/diana.jpg" sx={{ height: 130, width: 130 }}/>
                            <label htmlFor="icon-button-file">
                                <Input accept="image/*" id="icon-button-file" type="file" />
                                <IconButton color="primary" aria-label="upload picture" component="span" sx={{ mt: -20, ml: 5.5 }}>
                                    <PhotoCamera />
                                </IconButton>
                            </label>
                        </Box>
                    </Container>
                    <Container>
                        <Box sx={{ mb: 2 }} component="form">
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="fistName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="headline"
                                        label="Headline"
                                        name="headline"
                                        size="small"
                                    />
                                </Grid>
                                <Grid item sm={12}>
                                    <TextField
                                        fullWidth
                                        id="country"
                                        label="Country"
                                        name="country"
                                        size="small"
                                    />
                                </Grid>
                                <Grid item sm={12}>
                                    <TextField
                                        fullWidth 
                                        id="city/district" 
                                        label="City/District"
                                        name="city/district" 
                                        size="small"
                                    />
                                </Grid>
                                <Grid item sm={12}>
                                    <TextField 
                                        fullWidth
                                        id="postalCode" 
                                        label="Postal Code"
                                        name="postalCode" 
                                        size="small" 
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </CustomBox>
           </Modal>
           <Snackbar
                open={openAlert}
                autoHideDuration={4000}
                onClose={handleClose2}
                anchorOrigin={{ vertical: "botto", horizontal: "left" }}
            >
                <Alert onClose={handleClose2} severity="success">
                    This is a success message!
                </Alert>
            </Snackbar>
        </>
    );
};

export default EditButton;