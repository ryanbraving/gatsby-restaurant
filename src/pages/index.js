import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {HomeHeader} from '../utils'
import img from '../images/bcg/homeBcg.jpeg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
    <h3>This is Home page</h3>
    </HomeHeader>
  </Layout>
)


export default IndexPage
