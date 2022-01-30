import { Cancel, MailOutlined, NotificationsOutlined, Search } from "@mui/icons-material";
import { alpha, AppBar, Avatar, Badge, Box, InputBase, Toolbar, Typography } from "@mui/material"
import { createStyles, makeStyles, styled } from "@mui/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    logoLg: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    logoSm:{
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    search: {
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
        },
    },
    cancel: {
        [theme.breakpoints.up("sm")]: {
            display: "none",
        }
    },
    searchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    icons: {
        alignItems: "center",
        display: (props) => (props.open ? "none" : "flex")
    }
}))

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles({ open });
    return (
        <AppBar>
            <Toolbar 
                sx={{ 
                    display: "flex",
                    justifyContent: "space-between", 
                }}>
                <Typography variant="h6" className={classes.logoLg}>
                    Project-Neo
                </Typography>
                <Typography variant="h6" className={classes.logoSm}>
                    NEO
                </Typography>
                <div className={classes.search}>
                    <Search />
                    <InputBase placeholder="search" sx={{ ml: 1, width: "50vw", fontSize: "0.9rem"}}/>
                    <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
                </div>
                <div className={classes.icons}>
                    <Search className={classes.searchButton} onClick={() => setOpen(true)}/>
                    <Badge sx={{ mr: 2 }}>
                        <MailOutlined />
                    </Badge>
                    <Badge sx={{ mr: 2 }}>
                        <NotificationsOutlined />
                    </Badge>
                    <Avatar alt="Diana Ayi" />
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;