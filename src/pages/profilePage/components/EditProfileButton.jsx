import { Close, Edit } from "@mui/icons-material";
import { Box, Button, Container, Divider, Grid, IconButton, Modal, styled, TextField, Typography } from "@mui/material";
import { useState } from "react";

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const EditProfileButton = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box>
            <IconButton color="primary" onClick={handleOpen} size="small">
                <Edit fontSize="small" color="primary" />
            </IconButton>
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
                    <Container position="fixed">
                        <Box sx={{justifyContent: "space-between", display: "flex", alignItems: "center", mt: 2, mb: 1}}>
                            <Typography variant="h6" color="gray" align="left">
                                Edit Profile
                            </Typography>
                            <IconButton onClick={handleClose} aria-label="exit modal" color="error">
                                <Close color="error" />
                            </IconButton>
                        </Box>
                    </Container>
                    <Divider />
                    <Box 
                        aria-label='scrollable-box' 
                        sx={{ 
                            overflow: 'auto',
                            display: 'flex',
                            flexGrow: 1,
                            flexDirection: 'column',
                            maxHeight: 350, 
                        }}
                    >
                        <Container>
                            <Typography fontWeight={20} fontSize={12} variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                * Indicates Required
                            </Typography>
                        </Container>
                        <Container sx={{ mt: 2 }}>
                            <Box component="form">
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            margin="normal" 
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
                                            margin="normal"
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
                                            margin="normal"
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
                                            margin="normal"
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
                            </Box>
                        </Container>
                    </Box>
                    <Divider />
                    <Container position="fixed">
                        <Grid container justifyContent="flex-end">
                            <Button size="small" variant="contained" sx={{ mt: 2, mb: 2 }}>
                                Save
                            </Button>
                        </Grid>
                    </Container>
                </Box>
            </StyledModal>
        </Box>
    );
}

export default EditProfileButton;