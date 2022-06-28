import { AdbRounded, Mail, MenuTwoTone, Notifications, Search, } from "@mui/icons-material";
import { AppBar, Avatar, Toolbar, Typography, Box, IconButton, Tooltip, Menu, MenuItem, styled, alpha, InputBase, Badge, } from "@mui/material"
import { useState } from "react";
import TemporaryDrawer from "./TemporaryDrawer";

const StyledSearch = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 2,
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

    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const onContextMenuClick = (action) => {
        setAnchorElUser(null);
        if (action.toLowerCase() === 'logout') {
            localStorage.removeItem("token");
            window.location.reload();
        }
    }

    return (
        <>
            <TemporaryDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="relative">
                    <Toolbar sx={{ width: { xl: '76%', lg: '90%' }, margin: { xl: '0 auto', lg: '0 auto'} }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleDrawerOpen}
                            sx={{ display: {xs: 'flex', sm: 'none'}, mr: 2 }}
                        >
                            <MenuTwoTone />
                        </IconButton>
                        <AdbRounded sx={{ display: {xs: 'none', sm: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{ 
                                display: { xs: 'none', sm: 'block' }, 
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none'
                            }}
                        >
                            Devicate
                        </Typography>
                        <StyledSearch>
                            <SearchIconWrapper>
                                <Search />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </StyledSearch>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="error">
                                    <Mail />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge badgeContent={17} color="error">
                                    <Notifications />
                                </Badge>
                            </IconButton>
                        </Box>
                        <Tooltip title="Open settings">
                            <IconButton edge="end" onClick={handleOpenUserMenu} >
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
                                <MenuItem 
                                    key={setting} 
                                    onClick={() => onContextMenuClick(setting)}    
                                >
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