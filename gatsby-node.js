const path = require("path")

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions
  
  const paintings = await graphql(
    `
    query paintingquery {
      allContentfulPainting {
        edges {
          node {
            slug
            thumbnail {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
    `

  ).then(result => { 
  result.data.allContentfulPainting.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/painting-page.js`),
      context: {
        slug: node.slug,
        thumbnail: node.thumbnail
      },
    });
  });
})

    

const motionpaintings = await graphql(
    `
    query motionpaintingquery {
      allContentfulMotionPainting {
        edges {
          node {
            slug
            thumbnail {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
    `

  ).then(result => {  
    result.data.allContentfulMotionPainting.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/motionpainting-page.js`),
        context: {
          slug: node.slug,
          thumbnail: node.thumbnail
        },
      });
    });
  })
  

  const blogposts = await graphql(
    `
    query blopostquery {
      allContentfulBlogPost {
        edges {
          node {
            slug
            thumbnail {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
    `

  ).then(result => { 
  result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/blog-page.js`),
      context: {
        slug: node.slug,
        thumbnail: node.thumbnail
      },
    });
  });
})


  return Promise.all([paintings, motionpaintings, blogposts])
}