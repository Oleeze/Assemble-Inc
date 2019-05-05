import React, { Component } from 'react'
import styled from 'styled-components'

const Nav = styled.div`
  background: blue;
  color: white;
  padding: 1em;
`

export default class Header extends Component {
  render() {
    return (
      <Nav>
        Assemble Store
      </Nav>
    )
  }
}
