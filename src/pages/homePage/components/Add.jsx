import { Edit } from "@mui/icons-material";
import { Fab, Snackbar, styled, Tooltip } from "@mui/material"
import { useState } from "react"

const CustomFab = styled(Fab)(({ theme }) => ({
    position: 'fixed',
    bottom: 20,
    right: 20,
}));

const Add = () => {
    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    return (
        <>
        <Tooltip title="Create" onClick={() => setOpen(true)}>
            <CustomFab color="secondary" aria-label="create">
                <Edit />
            </CustomFab>
        </Tooltip>
        <Snackbar>

        </Snackbar>
        </>
    );
};

export default Add;