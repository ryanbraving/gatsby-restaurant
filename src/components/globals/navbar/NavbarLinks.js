import React, { Component } from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import {styles} from '../../../utils'

export default class NavbarLinks extends Component {
  state = {
    links: [
      {
          id: 0,
          path: '/',
          name: 'Home',
      },
      {
        id: 1,
        path: '/about',
        name: 'About',
      },
      {
        id: 2,
        path: '/menu',
        name: 'Menu',
      },
      {
        id: 3,
        path: '/contact',
        name: 'Contact',
      },
    ]
  }
  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {
          this.state.links.map(item => {
            return(
              <li key = {item.id}>
                <Link to= {item.path} className="nav-link">
                  {item.name}
                </Link>
              </li>
            )
          })
        }
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`

`
