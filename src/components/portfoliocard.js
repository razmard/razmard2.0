import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {Card, CardMedia, CardActionArea, CardContent, Typography, Box, Chip} from "@mui/material"

const PortfolioCard = (props) => {
    return (
        
        <Card elevation={3}  xs={6} md= {4} component={Link} to={props.slug} replace sx={{ m:1}}>
            <CardActionArea>
                <CardMedia title={props.title}>
                <GatsbyImage image={getImage(props.image)} />
                
                </CardMedia>
                <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        padding: '10px',
      }}
    >
                <Typography textAlign="center" variant="h5"  sx={{boxShadow: 3, backgroundColor: "secondary.main", borderRadius:1 , mb:1}}>{props.title}</Typography>
                <Chip size="small" label={props.type} color="primary"/>
                </Box>
            </CardActionArea>
        </Card>
       
    )
}

export default PortfolioCard;