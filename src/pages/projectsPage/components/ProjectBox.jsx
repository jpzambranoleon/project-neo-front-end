import { Box, Grid } from "@mui/material"
import Projects from "./Projects";

const ProjectBox = () => {
    return (
        <Box sx={{ paddingTop: 10 }}>
            <Grid container spacing={2}>
                <Grid item>
                    <Projects />
                </Grid>
                <Grid item>
                    <Projects />
                </Grid>
                <Grid item>
                    <Projects />
                </Grid>
                <Grid item>
                    <Projects />
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProjectBox;