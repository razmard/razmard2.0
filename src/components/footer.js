import React from "react";
import {Container, Grid, Typography, Box} from "@mui/material"

const Footer = () => {
    return (
    <Box sx={{backgroundColor: "primary.main", mt:3}}>
    <Container>
        <Grid container sx={{ py:3,  justifyContent: "center"}}>
            
           <Typography align="center" variant="body1" sx={{color: "white.main"}}>© 2024 by <a href="https://twitter.com/razmrd" alt="Ramard">Razmard</a>. All rights reseverd.</Typography>
            
            
        </Grid>
        </Container>
        </Box>
    )
}

export default Footer;