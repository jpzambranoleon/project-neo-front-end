import { AdbOutlined, AdbRounded, MenuTwoTone, } from "@mui/icons-material";
import { AppBar, Avatar, Toolbar, Typography, Box, IconButton, Tooltip, Menu, MenuItem } from "@mui/material"
import { useState } from "react";
import TemporaryDrawer from "./TemporaryDrawer";

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
        if (action.toLowerCase() === 'logout') {
            localStorage.removeItem("token");
            window.location.reload();
        }
    }

    return (
        <>
            <TemporaryDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
            <AppBar position="relative">
                <Toolbar sx={{ width: { xl: '76%', lg: '90%' }, margin: { xl: '0 auto', lg: '0 auto' }, justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AdbRounded sx={{ display: {xs: 'none', md: 'flex' }, mr: 1 }}/>
                        <Typography 
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none'
                            }}
                        >
                            DeviCate
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size='large'
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleDrawerOpen}
                            color="inherit"
                        >
                            <MenuTwoTone />
                        </IconButton>
                    </Box>
                    <AdbOutlined sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                        mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        DeviCate
                    </Typography>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} >
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
                            <MenuItem key={setting} onClick={() => onContextMenuClick(setting)}>
                                <Typography textAlign="center">
                                    {setting}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;