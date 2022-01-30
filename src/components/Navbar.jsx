import { Cancel, MailOutlined, NotificationsOutlined, Search } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, InputBase, Toolbar, Typography } from "@mui/material"
import { styled } from "@mui/styles";

const LogoLg = styled('div')(({ theme }) => ({
    display: "none",
    [theme.breakpoints.up("sm")]: {
        display: "block"
    }
}))

const LogoSm = styled('div')(({ theme }) => ({
    display: "block",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}))

const Navbar = () => {
    return (
        <AppBar>
            <Toolbar 
                sx={{ 
                    display: "flex",
                    justifyContent: "space-between", 
                }}>
                <LogoLg>
                    <Typography variant="h6">
                        Project-Neo
                    </Typography>
                </LogoLg>
                <LogoSm>
                    <Typography variant="h6" >
                        NEO
                    </Typography>
                </LogoSm>
                <Box sx={{}}>
                    <Search />
                    <InputBase placeholder="search" />
                    <Cancel />
                </Box>
                <Box sx={{ alignItems: "center", display: (props) => (props.open ? "none": "flex") }}>
                    <Search />
                    <Badge>
                        <MailOutlined />
                    </Badge>
                    <Badge>
                        <NotificationsOutlined />
                    </Badge>
                    <Avatar alt="Diana Ayi" />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;