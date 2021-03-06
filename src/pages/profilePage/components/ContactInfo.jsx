import { Cancel } from "@mui/icons-material";
import { Box, Button, Container, IconButton, Modal, styled, Typography } from "@mui/material";
import { useState } from "react";

const CustomContainer = styled(Container)(({ theme }) => ({
    width: 300,
    height: 400,
    backgroundColor: "white",
    position: "absolute",
    top: 150,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
        top: 0,
        width: "100%",
        height: "100%"
    }
}))

const ContactInfo = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)} sx={{ mt: 2, fontSize: 10, textTransform: 'none' }} variant="contained" size="small">
                Contact Info
            </Button>
            <Modal open={open}>
                <CustomContainer>
                    <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography>
                            Contact Information
                        </Typography>
                        <IconButton onClick={() => setOpen(false)}>
                            <Cancel />
                        </IconButton>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <Typography>
                            Phone: 555-555-5555
                        </Typography>
                        <Typography>
                            Email: dayi@gmail.com
                        </Typography>
                    </Box>
                </CustomContainer>
            </Modal>
        </>
    )
};

export default ContactInfo;