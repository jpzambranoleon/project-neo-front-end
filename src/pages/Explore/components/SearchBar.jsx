import { Menu, Search } from "@mui/icons-material";
import { IconButton, InputBase, Paper } from "@mui/material";

const SearchBar = () => {
    return (
        <Paper component="form" >
            <IconButton>
                <Menu />
            </IconButton>
            <InputBase 
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
            />
             <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <Search />
            </IconButton>
        </Paper>
    );
};

export default SearchBar;
