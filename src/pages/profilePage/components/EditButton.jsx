import { Alert, Box, Button, Container, Grid, Modal, Snackbar, styled, TextField, Typography } from "@mui/material";
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
                    <Typography sx={{ mt: 2 }}>
                        Edit Profile
                    </Typography>
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
                            <Grid item sm={12}>
                                <TextField id="standard-basic" label="Headine" size="small" sx={{ width: '100%' }}/>
                            </Grid>
                            <Grid item sm={12}>
                                <TextField id="standard-basic" label="Country/Region" size="small" sx={{ width: '100%' }}/>
                            </Grid>
                            <Grid item sm={12}>
                                <TextField id="standard-basic" label="City/District" size="small" sx={{ width: '100%' }}/>
                            </Grid>
                            <Grid item sm={12}>
                                <TextField id="standard-basic" label="Postal Code" size="small" sx={{ width: '100%' }}/>
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
                        <Button variant="outlined" color="secondary" onClick={() => setOpen(false)}>
                            Cancel
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