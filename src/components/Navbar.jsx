import { AccountCircle, Cancel, Mail, MenuTwoTone, Notifications, Search, SettingsInputAntennaTwoTone, SettingsPowerRounded } from "@mui/icons-material";
import { alpha, AppBar, Avatar, Badge, InputBase, Toolbar, Typography, styled, Box, IconButton, CardMedia, CardActionArea, Button, Tooltip, Menu, MenuItem, ClickAwayListener } from "@mui/material"
import { useState } from "react";
import TemporaryDrawer from "./TemporaryDrawer";

const SearchField = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
}));

const settings = ['Profile', 'Account', 'Logout']

const Navbar = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <TemporaryDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
            <Box sx={{ flexGrow: 1 }}>
                <AppBar>
                    <Toolbar sx={{ width: { sm: '80%' }, margin: { sm: '0 auto' } }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuTwoTone />
                        </IconButton>
                        <Typography 
                            variant="h6"
                            noWrap 
                            component="div" 
                            sx={{ display: { xs: 'none', sm: 'block' } }}>
                            LOGO
                        </Typography>
                        <SearchField>
                            <SearchIconWrapper>
                                <Search />
                            </SearchIconWrapper>
                            <StyledInputBase 
                                placeholder="Search..."
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </SearchField>
                        <Box sx={{ flexGrow: 1 }}/>
                        <Tooltip title="User">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Diana Ayi" src="/assets/person/diana.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">
                                        {setting}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar;