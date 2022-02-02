import { Close } from "@mui/icons-material"
import { Avatar, Card, CardActionArea, CardHeader, CardMedia, IconButton } from "@mui/material"

const Projects = () => {
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar src="/assets/person/diana.jpg"/>
                }
                action={
                    <IconButton>
                        <Close />
                    </IconButton>
                }
                title="Projects"
                subheader="September 14, 2022"
            />
            <CardActionArea>
                <CardMedia 
                    component="img"
                    height="140"
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                />
            </CardActionArea>
        </Card>
    );
};

export default Projects;