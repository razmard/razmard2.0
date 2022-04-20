module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    siteUrl: `https://razmard.com`,
    title: `Razmard`,
    description: `Hi, I am a music producer and an NFT artist, making high vibrational music and visual art to feel human`,
    image: '\src\images\Dreamer-#4113.png',
    keywords: 'Indie Music, NFT Artist, Music NFT, NFT Musician, NFT Music Collection, Music NFT Collection',
    author: '@razmard7',
    socials: {
      twitter: `https://twitter.com/razmard7`,
      youtube: `https://www.youtube.com/channel/UCnYNQdb-kZ86z9Fhn-4mWKg`,
      soundcloud: `https://soundcloud.com/razmard`,
      instagram: `https://instagram.com/razmard`,
    },
  },

  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `a2hum630kyjb`,
        accessToken: `-gYaZdQ_8B0_LYNNPnpMYL-WGQlk6J0DaHxODUdgXZQ`,
      },
    },
    {resolve: `gatsby-plugin-nprogress`,
    options: {
      
      color: `orange`,
      
      showSpinner: false,
    },
  },
  
    {
    resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Rubik`,
                variants: [`500`, `700`, `900`],
              },
              {
                family: `Roboto Mono`,
                variants: [`400`,],
              },
            ],
          },
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    
  ],
};
