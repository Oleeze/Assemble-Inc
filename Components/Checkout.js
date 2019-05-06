import React, { Component } from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements';
import { Button } from '../StyleComponents/Button.js'

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    // User clicked submit
  }

  render() {
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <Button onClick={this.submit}>Place Order</Button>
      </div>
    );
  }
}

export default injectStripe(Checkout);