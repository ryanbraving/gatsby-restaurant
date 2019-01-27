import React from 'react'
import styled from 'styled-components'
import img from '../images/bcg/homeBcg.jpeg'

function HomeHeader({img, children}) {
  return (
    <IndexHeaderWrapper img={img.replace('http://:8000/','')}>
      {children}
    </IndexHeaderWrapper>
  )
}


// const IndexHeaderWrapper = styled.div`
const IndexHeaderWrapper = styled.header`
  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)) , 
              url(${props => props.img}) center/cover fixed no-repeat ;
  min-height: calc(100vh - 54.8px);
  display: flex;
  justify-content: center;
  align-items: center;

`

HomeHeader.defaultProps = {
  img: img,
}

export { HomeHeader }

