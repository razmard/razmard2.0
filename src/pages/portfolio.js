import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import PortfolioCard from "../components/portfoliocard";
import { Grid } from "@mui/material";

const PortfolioPage = ({ data }) => {
  const paintings = data.allContentfulPainting.edges
  const motionPaintings = data.allContentfulMotionPainting.edges

  return (<Layout pageTitle="About Razmard">
      <Grid spacing={1} container gridTemplateColumns="repeat(4, 1fr)" sx={{justifyContent: "center"}}>
      {paintings.map( painting => <PortfolioCard title={painting.node.title} description={painting.node.subtitle} image={painting.node.media} slug={painting.node.slug} type={painting.node.type}/> )}
      {motionPaintings.map( motionPainting => <PortfolioCard title={motionPainting.node.title} description={motionPainting.node.subtitle} image={motionPainting.node.media} slug={motionPainting.node.slug}type={motionPainting.node.type}/> )}
  </Grid>
  </Layout>)
}

export default PortfolioPage;

export const pageQuery = graphql`
  query portfolioPage {
    allContentfulPainting(sort: { order: ASC, fields: title }) {
      edges {
        node {
          title
          subtitle
          slug
          type
          media {
            gatsbyImageData(placeholder: TRACED_SVG, resizingBehavior: NO_CHANGE, width: 333, quality: 90)
          }
          
        }
      }
    }
    allContentfulMotionPainting(sort: { order: DESC, fields: title }) {
      edges {
        node {
          title
          subtitle
          slug
          type
          media {
            gatsbyImageData(placeholder: TRACED_SVG, resizingBehavior: NO_CHANGE, width: 333, quality: 90)
          }
        }
        
      }
    }
  }
`;
