import { Card, CardMedia } from "@mui/material";

const ProfileCard = () => {
    return (
        <Card>
            <CardMedia 
                component="img"
                height="140"
                image="/assets/cover/cover.jpg"
            />
        </Card>
    );
};

export default ProfileCard;