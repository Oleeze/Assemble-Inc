import React, { Component } from 'react'
import styled from 'styled-components'
import { H5 } from '../StyleComponents'

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
        <H5 style={{ flex: 1 }}>
          Picture
        </H5>
        <ItemName>
          <p>{this.props.name}</p>
          <H5>SKU# {this.props.sku}</H5>
        </ItemName>
        <p style={{ flex: 1 }}>{this.props.quantity}</p>
        <p style={{ flex: 1 }}>${this.props.unitPrice}</p>


      </Content>
    )
  }
}
