import { Cancel, MailOutlined, NotificationsOutlined, Search } from "@mui/icons-material";
import { alpha, AppBar, Avatar, Badge, Box, InputBase, Toolbar, Typography } from "@mui/material"
import { createStyles, makeStyles, styled } from "@mui/styles";
import { useState } from "react";

const LogoLg = styled('div')(({ theme }) => ({
    display: "none",
    [theme.breakpoints.up("sm")]: {
        display: "block"
    }
}));

const LogoSm = styled('div')(({ theme }) => ({
    display: "block",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}));

const SearchBox = styled('div')(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha("#e9ecef", 1),
    '&:hover': {
        backgroundColor: alpha("#e9ecef", 0.75),
    },
    borderRadius: "2rem",
    width: "50%",
    [theme.breakpoints.down("sm")]: {
        display: (props) => (props.open ? "flex" : "none"),
        width: "70%",
    }
}));

const CancelButton = styled('div')(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}));

const ButtonIcons = styled('div')({
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex")
});

const SearchButton = styled('div')(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}));

const Navbar = () => {
    const [open, setOpen] = useState(false);

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
                <SearchBox>
                    <Search />
                    <InputBase placeholder="search" sx={{ ml: 1, width: "50vw", fontSize: "0.9rem"}}/>
                    <CancelButton>
                        <Cancel onClick={() => setOpen(false)} />
                    </CancelButton>
                </SearchBox>
                <ButtonIcons>
                    <SearchButton>
                        <Search sx={{ mr: 2 }} onClick={() => setOpen(true)}/>
                    </SearchButton>
                    <Badge sx={{ mr: 2 }}>
                        <MailOutlined />
                    </Badge>
                    <Badge sx={{mr: 2}}>
                        <NotificationsOutlined />
                    </Badge>
                    <Avatar alt="Diana Ayi" />
                </ButtonIcons>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;