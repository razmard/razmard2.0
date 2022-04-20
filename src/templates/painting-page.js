import React, { Component } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { Box, Typography, Grid, Chip, Button, Card, CardMedia } from "@mui/material";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";
import LinkIcon from '@mui/icons-material/Link';
import SellIcon from '@mui/icons-material/Sell';
import NumbersIcon from '@mui/icons-material/Numbers';
import ImageIcon from '@mui/icons-material/Image';
import Seo from "../components/seo";

class Painting extends Component {
  render() {
    const page = this.props.data.contentfulPainting;

    const options = {
      renderMark: {
        [MARKS]: (text) => <Typography variant="text">{text}</Typography>,
      },
      renderNode: {
        [INLINES.HYPERLINK]: (node, children) => {
          const { uri } = node.data;
          return (
            <a href={uri} className="underline">
              {children}
            </a>
          );
        },
        [BLOCKS.HEADING_2]: (node, children) => {
          return <Typography variant="h2" sx={{color:"primary.main"}}>{children}</Typography>;
        },
      },
    };
    const richtext = renderRichText(page.description, options);

    return (
      <Layout pageTitle={page.title}>
        <Seo title={page.title} description={page.description}  image={getImage(page.thumbnail)}/>
        <Card elevation={6} sx={{ p: 1, my:3, mb:6, mx:2, borderRadius: 3}}>
          <Grid container>
            <Grid item xs={12} sx={{ p: 2 }}>
              <Grid container sx={{ justifyContent: "center",p:3 }}>
                <Card elevation={6} sx={{borderRadius: 1}}>
                <CardMedia>
                <GatsbyImage image={getImage(page.media)} />
                </CardMedia>
                </Card>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container sx={{  textAlign: "center"}}  xs={12}>
                <Grid item sx={{p:2, pb:4}}>
                  <Typography
                    sx={{ color: "primary.main", pb:2}}
                    variant="h1"
                  >
                    {page.title}
                  </Typography>
                  <Typography variant="text">''{page.subtitle}''</Typography>
                </Grid>
                </Grid>
                <Grid  container sx={{textAlign: "center", px:6, justifyContent: "center"}}> 
                <Grid item xs={4} md={3}>
                <Typography variant="h7"  sx={{ p:2, color: "primary.main"}}>Price:</Typography><Chip icon={<SellIcon/>} label={page.price}/>
                </Grid>
                <Grid item xs={4} md={3}>
                <Typography variant="h7"  sx={{ p:2, color: "primary.main"}}>Type:</Typography><Chip icon={<ImageIcon/>} label={page.type}/>
                </Grid>
                <Grid item xs={4} md={3}>
                <Typography variant="h7"  sx={{ p:2, color: "primary.main"}}>Editions:</Typography><Chip icon={<NumbersIcon/>} label={page.editions}/>
                </Grid>
                
              </Grid>
              <Grid container sx={{justifyContent: "center", p:6}}>
              <Button href={page.link} variant="contained" size="large" endIcon={<LinkIcon/>}>View on {page.minted}</Button>
            </Grid>
            </Grid>
          </Grid>
        </Card>
        <Box sx={{ textAlign: "left" }}>{richtext}</Box>
      </Layout>
    );
  }
}

export default Painting

export const pageQuery = graphql`
  query portfolio($slug: String!) {
    contentfulPainting(slug: { eq: $slug }) {
      title
      subtitle
      slug
      editions
      price
      link
      type
      minted
      thumbnail {
        gatsbyImageData(placeholder: BLURRED)
      }
      media {
        gatsbyImageData(placeholder: TRACED_SVG, quality: 88)
      }
      description {
        raw
      }
    }
  }
`;
