import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>Hello from Gatsby!</h3>
    <ButtonWrapper>Click Me</ButtonWrapper>
  
  </Layout>
)

const ButtonWrapper = styled.button`
  background:blue;
  color:white;
`
export default IndexPage
