import React from 'react';
import {Button} from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';

class Stripe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() { 
        return (
            <StripeCheckout
                name="Doodlewrite"
                description="Payment"
                amount="500"
                currency="USD"
                shippingAddress
                billingAddress
                zipCode
                locale="auto"
                stripeKey="pk_test_GRBeSKSft03lpoYFBrCIDoEX00ZNrPirhG"
                token={this.onToken}
            >
                <Button>Checkout</Button>
            </StripeCheckout>
        )
    }
}
 
export default Stripe;