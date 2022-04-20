import React, { Component } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
} from "@mui/material";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";
import SEO from "../components/seo";

class BlogPage extends Component {
  render() {
    const page = this.props.data.contentfulBlogPost;
    const options = {
      renderMark: {
        [MARKS]: (text) => <Typography variant="body">{text}</Typography>,
        [MARKS.BOLD]: (text) => <Typography variant="bold">{text}</Typography>,
      },
      renderNode: {
        [INLINES.HYPERLINK]: (node, children) => {
          const { uri } = node.data;
          return <a href={uri}>{children}</a>;
        },
        [BLOCKS.HEADING_2]: (node, children) => {
          return (
            <Typography variant="h2" sx={{ color: "primary.main" }}>
              {children}
            </Typography>
          );
        },
        [BLOCKS.HEADING_3]: (node, children) => {
          return (
            <Typography variant="h3" sx={{ color: "primary.main" }}>
              {children}
            </Typography>
          );
        },
        [BLOCKS.HEADING_4]: (node, children) => {
          return (
            <Typography variant="h4" sx={{ color: "primary.main" }}>
              {children}
            </Typography>
          );
        },
        [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
            return (
                <GatsbyImage image={children} alt={node.text}/>
            );
        },
      },
    };

    const richtext = renderRichText(page.post, options);

    return (
        <Layout pageTitle={page.title}>
          <SEO title={page.title} description={page.subtitle}  image={getImage(page.thumbnail)}/>
          <Card container elevation={6} sx={{ p: 1, my:3, mb:6, mx:2, borderRadius: 3}}>
            <Grid xs={4}>
              <CardMedia>
            <GatsbyImage image={getImage(page.thumbnail)}/>
            </CardMedia>
            </Grid>
            <Grid xs={8}>
              <Typography variant="h1">{page.title}</Typography>
              <Typography variant="subtitle">{page.date}</Typography>
              </Grid>
              </Card>
            <Box container sx= {{mb:6}}>
            {richtext}
            </Box>
              </Layout>
    );


  }
}

export default BlogPage

export const pageQuery = graphql`
  query blogposts($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      subtitle
      slug
      thumbnail {
        gatsbyImageData(placeholder: BLURRED)
      }
      post {
        raw
      }
    }
  }
`;

