import React from "react";
import {Container, Grid, Typography, Box} from "@mui/material"

const Footer = () => {
    return (
    <Box sx={{backgroundColor: "primary.main", mt:3}}>
    <Container>
        <Grid container sx={{ py:3}}>
            
            <Grid item xs={6}><Typography align="left" variant="body1" sx={{color: "white.main"}}>© 2022 by Razmard. All rights reseverd.</Typography></Grid>
            <Grid item xs={6} ><Typography align="right" variant="body1" sx={{color: "white.main"}}>this website is <a href="">Open Source</a></Typography></Grid>
            
        </Grid>
        </Container>
        </Box>
    )
}

export default Footer;