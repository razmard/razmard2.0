import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import SEO from "../components/seo"
const IndexPage = () => {
  return (
      
      
      <Layout>
        <SEO title="Home" image="/images/Dreamer-#4113.png" />
      <SEO/> 
      <Hero/>
      </Layout>
    
  )
}   

export default IndexPage