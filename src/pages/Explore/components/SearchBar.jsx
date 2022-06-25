import { Directions, Menu, Search } from "@mui/icons-material";
import { Box, Divider, IconButton, InputBase, Paper } from "@mui/material";

const SearchBar = () => {
    return (
      <Box component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', mb: 2 }}>
        <IconButton>
          <Menu />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Users"
          inputProps={{ 'aria-label': 'search users' }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: '10px' }} aria-label="search">
          <Search />
        </IconButton>
      </Box>
    );
};

export default SearchBar;
