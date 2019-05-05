import React, { Component } from 'react'
import Header from './Header.js'
import styled from 'styled-components'
import WrapperContent from './WrapperContent.js'
import './cssStyle.css'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em;
  
`

const WrapperHead = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
`

const WrapperBottom = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid black;
`

const Button = styled.button`
  background: blue;
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
      <div>
        <Header/>
        <Wrapper>
          <WrapperHead>
            <h1 style={{ flex: 2 }}>Your Cart</h1>
            <h1 style={{ flex: 1 }}>quantity</h1>
            <h1 style={{ flex: 1 }}>price</h1>
          </WrapperHead>
          {
            this.state.cart.map(item => {
              return <WrapperContent sku={ item.sku } unitPrice={ item.unitPrice } name={ item.name } quantity={ item.quantity }/>
            })
          }
          <WrapperBottom>
            <h1>SUBTOTAL</h1>
            <h1>${this.state.subTotal}</h1>
            <Button>Check out</Button>
          </WrapperBottom>
        </Wrapper>
      </div>
    )
  }
}
