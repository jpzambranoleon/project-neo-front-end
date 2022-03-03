import { Edit } from "@mui/icons-material";
import { Alert, Box, Fab, Snackbar, styled, Tooltip } from "@mui/material"
import { useState } from "react"

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