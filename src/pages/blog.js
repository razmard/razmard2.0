import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import BlogCard from "../components/blogcard";
import Seo from "../components/seo";
import { Grid } from "@mui/material";

const BlogMain = ({data}) => {
 const blogposts = data.allContentfulBlogPost.edges

  return (
      
      
      <Layout>
        <Seo title="Blog" image="/images/Dreamer-#4113.png" />
        <Grid spacing={1} container gridTemplateColumns="repeat(1, 1fr)" sx={{justifyContent: "center",}}>

        {blogposts.map( blogpost => <BlogCard title={blogpost.node.title} description={blogpost.node.subtitle} image={blogpost.node.thumbnail} slug={blogpost.node.slug}/> )}
        </Grid>
        </Layout>
  )
}

export default BlogMain

export const pageQuery = graphql`
query blogpostpagequery {
    allContentfulBlogPost {
      edges {
        node {
          slug
          subtitle
          title
          thumbnail {
            gatsbyImageData(placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
  `