export default function calculateCartTotal(products) {
  const total = products.reduce((accumulated, element) => {
    accumulated += element.product.price * element.quantity;
    return accumulated;
  }, 0);
  const cartTotal = ((total * 100) / 100).toFixed(2);
  const stripeTotal = Number((total * 100).toFixed(2));

  return { cartTotal, stripeTotal };
}
