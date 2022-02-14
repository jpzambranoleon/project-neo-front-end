import { Menu } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";

const SearchBar = () => {
    return (
        <Paper component="form" >
            <IconButton>
                <Menu />
            </IconButton>
        </Paper>
    );
};

export default SearchBar;
