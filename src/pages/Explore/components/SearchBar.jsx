import { Directions, Menu, Search } from "@mui/icons-material";
import { Divider, IconButton, InputBase, Paper } from "@mui/material";

const SearchBar = () => {
    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <IconButton sx={{ p: '10px' }} aria-label="menu">
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
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                <Directions />
            </IconButton>
        </Paper>
    );
};

export default SearchBar;
