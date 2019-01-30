import React from 'react'
import Img from 'gatsby-image'
import {StaticQuery, graphql} from 'gatsby'

export default function Gallery() {
  return (
    <StaticQuery
      query= {graphql`
        query {
          img1: file(relativePath: { eq: "homeGallery/img-1.jpeg" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render = {data => <Img fluid = {data.img1.childImageSharp.fluid} /> }
    />
  )
}
