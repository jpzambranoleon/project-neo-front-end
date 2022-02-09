import { Box, CardContent, Typography } from "@mui/material";

const Skills = () => {
    return (
        <Box sx={{ mt: 3, bgcolor: "white" }}>
            <CardContent>
                <Typography variant="h5">
                    About
                </Typography>
            </CardContent>
            <CardContent>
                <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Id, dolorum quae aliquam explicabo a in tenetur at. 
                    Deserunt explicabo quis quaerat dolorem id iusto delectus, neque asperiores! 
                    Tenetur, facere culpa. Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Voluptates asperiores magnam natus nisi officiis, 
                    reprehenderit aperiam deserunt atque maxime at iusto, consequuntur esse, 
                    ipsa fugit blanditiis praesentium laudantium rem distinctio?
                </Typography>
            </CardContent>
        </Box>
    );
};

export default Skills;