import { Box, Button, Paper, Typography } from "@mui/material";

const Tags = () => {
    return (
        <Paper sx={{ mt: 3 }}>
            <Box sx={{ ml: 1 }}>
                <Typography gutterBottom>
                    Categories
                </Typography>
                <Button variant="outlined" sx={{ mr: 1, color: '#555', fontSize: 15, textTransform: 'none' }}>
                    JavaScript
                </Button>
                <Button variant="outlined" sx={{ mr: 1, color: '#555', fontSize: 15, textTransform: 'none' }}>
                    CSS
                </Button>
                <Button variant="outlined" sx={{ mr: 1, color: '#555', fontSize: 15, textTransform: 'none' }}>
                    React
                </Button>
            </Box>
        </Paper>
    )
}

export default Tags;