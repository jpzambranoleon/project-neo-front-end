import { Avatar, Box, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import EditButton from "./EditButton";

const ProfileImg = () => {
    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAlert(false);
    };

    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Tooltip title="Change Photo" placement="top">
                <IconButton sx={{ p: 0 }} onClick={() => setOpen(true)}>
                    <Avatar src="/assets/person/diana.jpg" sx={{ width: 150, height: 150 }}/>
                </IconButton>
            </Tooltip>
            <EditButton />
        </Box>
    );
};

export default ProfileImg;