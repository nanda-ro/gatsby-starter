import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static" color="transparent" elevation="0">
            <Container>
            <Toolbar>
                <Typography variant="h6" color="inherit" component="div">TEST</Typography>
            </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
