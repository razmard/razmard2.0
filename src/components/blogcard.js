import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {Card, CardMedia, Grid, CardActionArea, Typography, Box, Chip} from "@mui/material"

const BlogCard = (props) => {
    return (
        <Card elevation={3}  xs={12} md= {12} component={Link} to={props.slug}  sx={{ m:1}}>
            <CardActionArea>
            <Grid container>
                <Grid item xs={4}>
                    <CardMedia>
                    <GatsbyImage image={getImage(props.image)}/>
                    </CardMedia>
                </Grid>
                <Grid item xs={4} sx={{m:2}}>
                    <Typography variant="h2">{props.title}</Typography>
                    <Typography variant="body1">{props.description}</Typography>
                </Grid>
            </Grid>
            </CardActionArea>
        </Card>
    )
}
export default BlogCard;