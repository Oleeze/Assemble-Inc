import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Body, Button, Wrapper, WrapperHead, H5 } from '../StyleComponents/index.js'

import Header from '../Components/Header.js'
import WrapperContent from '../Components/WrapperContent.js'

const WrapperBottom = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid black;
  flex: 1;
  > div:nth-child(1) {
    display: flex;
    flex-direction: row;
  }
`

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [
              { sku: 38094374, 
                unitPrice: 24.0, 
                name: "Red Shirt", 
                quantity: 2 
              }, 
              { sku: 38094375, 
                unitPrice: 24.0, 
                name: "Blue Shirt", 
                quantity: 1 
              }, 
              { sku: 38094321, 
                unitPrice: 12.0, 
                name: "Blue socks", 
                quantity: 4 
              }
            ],
            subTotal: 0
          }
  }

  componentDidMount() {
    const subTotal = this.state.cart.map(item => {return item.unitPrice * item.quantity})
    .reduce((accumulator, currentValue) => accumulator + currentValue)
    this.setState({ subTotal })
  }

  render() {
    return (
      <Body>
        <Header/>
        <Wrapper>
          <WrapperHead>
            <h2 style={{ flex: 2 }}>Your Cart</h2>
            <H5 style={{ flex: 1 }}>quantity</H5>
            <H5 style={{ flex: 1 }}>price</H5>
          </WrapperHead>
          {
            this.state.cart.map(item => {
              return <WrapperContent sku={ item.sku } unitPrice={ item.unitPrice } name={ item.name } quantity={ item.quantity }/>
            })
          }
          <WrapperBottom>
            <div>
            <H5>SUBTOTAL</H5>
            <h5>${this.state.subTotal}</h5>
            </div>
          </WrapperBottom>
          <Link href="/checkout">
              <Button>
                Check out
              </Button>
            </Link>
        </Wrapper>
      </Body>
    )
  }
}
