import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {PageHeader} from '../utils'
import img from '../images/bcg/menuBcg.jpeg'

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={img}>
      <h3>This is Menu page</h3>
    </PageHeader>
  </Layout>
)


export default MenuPage