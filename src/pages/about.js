import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {PageHeader} from '../utils'
import img from '../images/bcg/aboutBcg.jpeg'

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={img}>
      <h3>This is About page</h3>
    </PageHeader>
  </Layout>
)


export default AboutPage