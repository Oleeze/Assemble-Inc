import React, { Component } from 'react'
import styled from 'styled-components'

const Content = styled.div`
  display: flex;
  flex-direction: row;
`

const ItemName = styled.div`
  flex: 2;
  display: flex;
  flex-direction column;
`

export default class WrapperContent extends Component {
  render() {
    return (
      <Content>
        <h1 style={{ flex: 1 }}>
          Picture
        </h1>
        <ItemName>
          <p>{this.props.name}</p>
          <p>SKU# {this.props.sku}</p>
        </ItemName>
        <p style={{ flex: 1 }}>{this.props.quantity}</p>
        <p style={{ flex: 1 }}>${this.props.unitPrice}</p>


      </Content>
    )
  }
}
