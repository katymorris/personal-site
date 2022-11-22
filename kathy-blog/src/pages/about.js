import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About" />
      <p>Hi! I'm Kathy. I work at Nuance Communications (a Microsoft company) building, designing and innovating engagement experiences on our digital platform. Previously I worked at a small app development company building full stack applications from the ground up.</p>
      <ul>
        <li><a href="https://www.linkedin.com/in/kathryn-morris-0b8938176/">LinkedIn</a></li>
        <li><a href="http://github.com/katymorris">Github</a></li>
        <li><a href="mailto:katydmorris@gmail.com">Email Me</a> (katydmorris@gmail.com)</li>
      </ul>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
