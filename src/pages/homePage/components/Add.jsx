import { Edit } from "@mui/icons-material";
import { Fab, Tooltip } from "@mui/material"
import { useState } from "react"

const Add = () => {
    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    return (
        <Tooltip title="Create" onClick={() => setOpen(true)}>
            <Fab color="secondary" aria-label="create">
                <Edit />
            </Fab>
        </Tooltip>
    );
};

export default Add;