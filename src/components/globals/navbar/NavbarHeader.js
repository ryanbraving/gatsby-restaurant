import React, { Component } from 'react'
import {Link} from 'gatsby'
import logo from '../../../images/logo.svg'

import { FaAlignRight } from "react-icons/fa"
import styled from 'styled-components'

export default class NavbarHeader extends Component {
  render() {
    console.log(logo)
    const logoPath = logo.replace('http://:8000/','')
    console.log(logoPath) 
    const { handleNavbar } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <img src={logoPath} alt="company name" />
        </Link>
        <FaAlignRight
          className="toggle-icon"
          onClick={() => {
            console.log("handleNavbar is callbacked inside onClick() function in NavbarHeader")
            // this.props.handleNavbar()
            handleNavbar()
          }}   />
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon{
    font-size: 1.75rem;
    color: yellow;
    cursor: pointer;
  }
  @media (min-width: 768px){
    .toggle-icon{
      display: none;
    }
  }
`
