import { Avatar, Box, Button, Modal, styled, Typography, } from "@mui/material";
import { useState } from "react";

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px'
})

const CreatePostButton = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button
                onClick={handleOpen}
                variant="contained" 
                fullWidth 
                size="large"  
            >
                Create Post
            </Button>
            <StyledModal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
                    <Typography variant="h6" color="gray" align="center">
                        Create Post
                    </Typography>
                    <UserBox>
                        <Avatar src="/assets/person/diana.jpg" />
                        <Typography fontWeight={500} variant="span">Diana Ayi</Typography>
                    </UserBox>
                </Box>
            </StyledModal>
        </div>
    );
};

export default CreatePostButton;