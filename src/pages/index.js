import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {HomeHeader, Banner, BannerButton} from '../utils'
import img from '../images/bcg/homeBcg.jpeg'
import QuickInfo from '../components/homePageComponents/QuickInfo'
import Gallery from '../components/homePageComponents/Gallery'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title='eatery' subtitle='11 signal Hill Terr, Calgary, AB'>
        <BannerButton style={{margin: '2rem auto'}} >
          menu
        </BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
  </Layout>
)


export default IndexPage
