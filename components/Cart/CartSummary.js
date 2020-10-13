import React, { useState, Fragment, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Divider, Segment, Button } from 'semantic-ui-react';
import calculateCartTotal from '../../utils/calculateCartTotal';

function CartSummary({ products, handleCheckout, success }) {
  const [cartAmount, setCartAmount] = useState(0);
  const [stripeAmount, setStripeAmount] = useState(0);
  const [isCartEmpty, setIsCartEmpty] = useState(false);

  useEffect(() => {
    const { cartTotal, stripeTotal } = calculateCartTotal(products);
    setCartAmount(cartTotal);
    setStripeAmount(stripeTotal);
    setIsCartEmpty(products.length === 0);
  }, [products]);

  return (
    <Fragment>
      <Divider />
      <Segment clearing size='large'>
        <strong>Sub total:</strong> ${cartAmount}
        <StripeCheckout
          name='React Reserve'
          amount={stripeAmount}
          image={products.length > 0 ? products[0].product.mediaUrl : ''}
          currency='USD'
          shippingAddress={true}
          billingAddress={true}
          zipCode={true}
          stripeKey='pk_test_fvXKVIkDe7M1NkJzOMwGmHmj00tRua5VrZ'
          token={handleCheckout}
          triggerEvent='onClick'
        >
          <Button
            icon='cart'
            disabled={isCartEmpty || success}
            color='teal'
            floated='right'
            content='Checkout'
          />
        </StripeCheckout>
      </Segment>
    </Fragment>
  );
}

export default CartSummary;
