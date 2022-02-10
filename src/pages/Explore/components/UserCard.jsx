import { Add, GitHub, Google, LinkedIn, Send } from "@mui/icons-material";
import { Avatar, Box, Button, ButtonGroup, Card, CardActionArea, CardContent, Grid, IconButton, ListItem, Stack, Typography } from "@mui/material";

const UserCard = () => {
    return(
        <Card>
            <Grid container direction="column" sx={{ alignItems: "center" }}>
                <Avatar src="/assets/person/diana.jpg" />
                <Typography>
                    Diana Ayi
                </Typography>
            </Grid>
        </Card>
    )
}

export default UserCard;