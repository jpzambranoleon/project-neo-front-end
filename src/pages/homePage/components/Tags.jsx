import { Button, Paper, Typography } from "@mui/material";

const Tags = () => {
    return (
        <Paper>
            <Typography gutterBottom>
                Categories
            </Typography>
            <Button variant="outlined" sx={{ mr: 2, color: '#555', fontSize: 15, textTransform: 'none' }}>
                JavaScript
            </Button>
            <Button variant="outlined" sx={{ mr: 2, color: '#555', fontSize: 15, textTransform: 'none' }}>
                CSS
            </Button>
            <Button variant="outlined" sx={{ mr: 2, color: '#555', fontSize: 15, textTransform: 'none' }}>
                React
            </Button>
        </Paper>
    )
}

export default Tags;