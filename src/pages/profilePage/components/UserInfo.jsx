import { Avatar, Box, CardMedia, Container, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import ContactInfo from "./ContactInfo";
import EditButton from "./EditButton";

const UserInfo = () => {
    return (
        <>
            <CardMedia 
                component="img"
                height="160"
                image="/assets/cover/cover.jpg"
            />
            <Container sx={{ mt: -10 }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Avatar src="/assets/person/diana.jpg" sx={{ width: 150, height: 150 }}/>
                    <EditButton />
                </Box>
                <Typography component="h1" variant="h4">
                    Diana Ayi
                </Typography>
                <Typography color={grey[500]}>
                    @dayi
                </Typography>
                <Typography variant="body2">
                    User Interface Designer and Front-End Developer
                </Typography>
                <Typography variant="body2" color={grey[500]}>
                    Tokyo, Japan
                </Typography>
                <ContactInfo />
            </Container>
        </>
    );
};

export default UserInfo;