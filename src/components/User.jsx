import { Avatar, CardActionArea, CardHeader, Paper } from "@mui/material";

const User = () => {
    return (
        <Paper sx={{ mb: 2 }}>
            <CardActionArea>
            <CardHeader
                avatar={
                    <Avatar src="/assets/person/diana.jpg"/>
                }
                title="Diana Ayi"
                subheader="@dayi"
            />
            </CardActionArea>
        </Paper>
    );
};

export default User;