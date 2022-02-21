import { Box, Button, Paper, Typography } from "@mui/material";

const Tags = () => {
    return (
        <Paper>
            <Box sx={{ ml: 2 }}>
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
            </Box>
        </Paper>
    )
}

export default Tags;