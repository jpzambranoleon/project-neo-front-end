import { Cancel, Code, Edit, EmojiEmotions, PermMedia, Send, Tag } from "@mui/icons-material";
import { Alert, Box, Container, Divider, Fab, IconButton, Modal, Snackbar, styled, Tooltip, Typography } from "@mui/material"
import { useState } from "react"

const CustomContainer = styled(Container)(({ theme }) => ({
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto"
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
                            Create a post
                        </Typography>
                        <IconButton onClick={() => setOpen(false)}>
                            <Cancel />
                        </IconButton>
                    </Box>
                    <Box sx={{ mb: 2, position: 'absolute', bottom: 0 }}>
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
                        <Fab sx={{ textTransform: 'none' }} variant="extended">
                            Post
                            <Send />
                        </Fab>
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