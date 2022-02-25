import { Alert, Box, Button, Container, Grid, Modal, Snackbar, styled, TextField } from "@mui/material";
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
    margin: "auto"
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
                    <Box sx={{ mt: 3 }} component="form">
                        <Grid container spacing={2}>
                            <Grid item sm={6} xs={12}>
                                <TextField id="standard-basic" label="First Name" size="small" sx={{ width: '100%' }}/>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <TextField id="standard-basic" label="Last Name" size="small" sx={{ width: '100%' }}/>
                            </Grid>
                        </Grid>
                    </Box>
                    <Button variant="outlined" color="secondary" onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
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