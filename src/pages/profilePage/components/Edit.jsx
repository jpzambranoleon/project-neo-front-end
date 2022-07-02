import { Close, Delete } from "@mui/icons-material";
import { Box, Button, Container, Divider, Grid, IconButton, Modal, styled, TextField, Typography } from "@mui/material";
import { useState } from "react";

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const Edit = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box>
            <Button onClick={handleOpen} size="small" variant="contained">
                Edit
            </Button>
            <StyledModal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-edit"
                aria-describedby="modal-edit-description"
            >
                <Box 
                    width={600}  
                    bgcolor={"background.default"} 
                    color="text.primary"
                    borderRadius={2}
                >
                    <Container position="static">
                        <Box sx={{justifyContent: "space-between", display: "flex", alignItems: "center", mt: 2, mb: 1}}>
                            <Typography variant="h6" color="gray" align="left">
                                Edit Profile
                            </Typography>
                            <IconButton aria-label="exit modal" color="error">
                                <Close color="error" />
                            </IconButton>
                        </Box>
                    </Container>
                    <Divider />
                    <Container>
                        <Typography fontWeight={20} fontSize={12} variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                            * Indicates Required
                        </Typography>
                    </Container>
                    <Container sx={{ mt: 4 }}>
                        <Box component="form">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField 
                                        size="small" 
                                        autoComplete="given-name" 
                                        name="firstName" 
                                        required 
                                        fullWidth 
                                        id="firstName" 
                                        label="First Name" 
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        size="small" 
                                        required 
                                        fullWidth 
                                        id="lastName" 
                                        label="Last Name" 
                                        name="lastName" 
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        size="small" 
                                        required 
                                        fullWidth 
                                        id="headLine" 
                                        label="Headline" 
                                        name="headLine" 
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        multiline
                                        fullWidth
                                        rows={3}
                                        variant="outlined"
                                        label="About"
                                        defaultvalue="About person"
                                        size="small"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container justifyContent="flex-end">
                                <Button size="small" variant="contained">
                                    Save
                                </Button>
                            </Grid>
                        </Box>
                    </Container>
                </Box>
            </StyledModal>
        </Box>
    );
}

export default Edit;