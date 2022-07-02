import { Box, Button, Divider, Grid, Modal, styled, TextField, Typography } from "@mui/material";
import { useState } from "react";

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
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
                    width={400}  
                    bgcolor={"background.default"} 
                    color="text.primary" 
                    p={3} 
                    borderRadius={5}
                >
                    <Typography gutterBottom variant="h6" color="gray" align="left">
                        Edit Profile
                    </Typography>
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
                </Box>
            </StyledModal>
        </Box>
    );
}

export default Edit;