import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";

const Edit = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box>
            <Button onClick={handleOpen} size="small" variant="contained">
                Edit
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-edit"
                aria-describedby="modal-edit-description"
            >
                <Box 
                    width={400} 
                    height={280} 
                    bgcolor={"background.default"} 
                    color="text.primary" 
                    p={3} 
                    borderRadius={5}
                >
                    <Typography variant="h6" color="gray" align="center">
                        Edit Profile
                    </Typography>
                </Box>
            </Modal>
        </Box>
    );
}

export default Edit;