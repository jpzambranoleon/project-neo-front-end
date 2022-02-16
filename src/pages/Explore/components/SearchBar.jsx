import { Menu, Search } from "@mui/icons-material";
import { Divider, IconButton, InputBase, Paper } from "@mui/material";

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
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Paper>
    );
};

export default SearchBar;
