import { Cancel } from "@mui/icons-material";
import { Alert, Box, Button, Container, Grid, IconButton, Modal, Snackbar, styled, TextField, Typography } from "@mui/material";
import { height } from "@mui/system";
import { useState } from "react";

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

const EditButton = () => {
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
            <Box sx={{ mt: 8 }}>
                <Button variant="outlined" onClick={() => setOpen(true)}>
                    Edit Profile
                </Button>
            </Box>
            <Modal open={open}>
                <CustomContainer>
                    <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography>
                            Edit Profile
                        </Typography>
                        <IconButton onClick={() => setOpen(false)}>
                            <Cancel />
                        </IconButton>
                    </Box>
                    <Box sx={{ mt: 2 }} component="form">
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
                    <Box sx={{ mt: 3 }}>
                        <Button
                            variant="outlined"
                            color="primary"
                            sx={{ mr: 2 }}
                            onClick={() => setOpenAlert(true)}
                        >
                            Update
                        </Button>
                    </Box>
                </CustomContainer>
            </Modal>
            <Snackbar
                open={openAlert}
                autoHideDuration={4000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "botto", horizontal: "left" }}
            >
                <Alert onClose={handleClose} severity="success">
                    This is a success message!
                </Alert>
            </Snackbar>
        </>
    );
};

export default EditButton;