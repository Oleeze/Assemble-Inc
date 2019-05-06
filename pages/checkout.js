import React, { Component } from 'react'
// import Checkout from '../Components/Checkout.js'
// import {Elements, StripeProvider} from 'react-stripe-elements';
import { Body, Wrapper, Button, WrapperHead, P } from '../StyleComponents/index.js'
import Header from '../Components/Header.js'
import styled from 'styled-components'

const WrapperContent = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
  > div {
    padding-top: 2em;
    flex: 1;
    > div:last-of-type {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
  > div:nth-child(2) {
    padding-left: 1em;
  }
`

const WrapperBody = styled.div`
    padding: 0;
    display: flex;
    flex-direction: row;
    & div {
      flex: 1;
      display: flex;
      flex-direction: column;
      & p, input {
        margin: 0.5em 0;
      }
    }
`

export default class CheckoutForm extends Component {
  render() {
    return (
      <Body>
      <Header/>
      <Wrapper>
        <form>
        <WrapperHead>
        <h2>Checkout</h2>
        </WrapperHead>
          <WrapperContent>
            <div>
              <h3>Payment Information</h3>
              <WrapperBody>
              <div>
                <P>Name on Card</P>
                <P>Card Number</P>
                <P>Expiration Date</P>
                <P>CVV</P>
              </div>
              <div>
                <input type="text" placeholder="Name on Card"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text" placeholder="City"/>
              </div>
            </WrapperBody>
            </div>
            <div>
              <h3>Shipping Address</h3>
              <WrapperBody>

                <div>
                  <P>Number</P>
                  <P>Address</P>
                  <P>Apt/Suite/etc</P>
                  <P>City</P>
                  <P>Country</P>
                  <P>State</P>
                  <P>ZIP Code</P>
                </div>
                <div>
                  <input type="text" placeholder="Full name"/>
                  <input type="text" placeholder="Address"/>
                  <input type="text" placeholder="Apt/Suite/etc"/>
                  <input type="text" placeholder="City"/>
                  <input type="text" placeholder="Use Strip dropdown"/>
                  <input type="text" placeholder="Use Strip dropdown"/>
                  <input type="text" placeholder="ZIP Code"/>
                </div>
              </WrapperBody>
              <div>
                <input type="checkbox"/>
                <p>Billing address same as shipping</p>
              </div>
            </div>
          </WrapperContent>
          <Button>Place Order</Button>
        </form>
      </Wrapper>
    </Body>
    )
  }
}
