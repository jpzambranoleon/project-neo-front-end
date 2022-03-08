import { Cancel, Code, Edit, EmojiEmotions, PermMedia, Tag } from "@mui/icons-material";
import { Alert, Box, Button, Container, Divider, Fab, IconButton, Modal, Snackbar, styled, TextField, Tooltip, Typography } from "@mui/material"
import { useState } from "react"

const CustomContainer = styled(Container)(({ theme }) => ({
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 65,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
        top: 0,
        width: "100%",
        height: "100%"
    }
}))

const CustomFab = styled(Fab)(({ theme }) => ({
    position: 'fixed',
    bottom: 20,
    right: 20,
}));

const Add = () => {
    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAlert(false);
    };

    return (
        <Box sx={{ display: {xs: 'block', sm: 'none'} }}>
            <Tooltip title="Create" onClick={() => setOpen(true)}>
                <CustomFab color="secondary" aria-label="create">
                    <Edit />
                </CustomFab>
            </Tooltip>
            <Modal open={open}>
                <CustomContainer>
                    <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between'  }}>
                        <Typography>
                            What's on your mind?
                        </Typography>
                        <IconButton onClick={() => setOpen(false)}>
                            <Cancel />
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
                    <Box sx={{ mt: 2, mb: 2, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between'  }}>
                        <Box>
                        <Tooltip title="Media" placement="top">
                            <IconButton>
                                <PermMedia />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Tag" placement="top">
                            <IconButton>
                                <Tag />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Write Code" placement="top">
                            <IconButton>
                                <Code />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Feelings" placement="top">
                            <IconButton>
                                <EmojiEmotions />
                            </IconButton>
                        </Tooltip>
                        </Box>
                        <Box>
                            <Button sx={{ textTransform: 'none' }} variant="contained" color="secondary">
                                Post
                            </Button>
                        </Box>
                    </Box>
                </CustomContainer>
            </Modal>
            <Snackbar
                open={openAlert}
                autoHideDuration={4000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
                <Alert onClose={handleClose} severity="success">
                    This is a success message!
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Add;