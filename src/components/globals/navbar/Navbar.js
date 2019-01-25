import React, { Component } from 'react'
import NavbarHeader from './NavbarHeader'
import NavbarLinks from './NavbarLinks'
import NavbarIcons from './NavbarIcons'
import styled from 'styled-components'

export default class Navbar extends Component {
  state={
    navbarOpen: false
  }

  handleNavbar = () =>{
    this.setState(() =>{
      console.log("handleNavbar method is called in Navbar")
      console.log("handleNavbar method is changing the state of navbarOpen to: ", !this.state.navbarOpen)
      return {navbarOpen:!this.state.navbarOpen}
    })
  }

  render() {
    return (
      <NavbWrapper>
        <NavbarHeader handleNavbar={this.handleNavbar}/>
        <NavbarLinks navbarOpen={this.state.navbarOpen}/>
        <NavbarIcons />
      </NavbWrapper>
    )
  }
}

const NavbWrapper = styled.nav`
@media (min-width:768px){
  display:flex;
  align-items:cent;
}
`
