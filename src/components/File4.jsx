const OrderSummary = ({ order }) => {
  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <p>Food: {order.food.name}</p>
      <p>Quantity: {order.quantity}</p>
      <p>Total: ${order.total}</p>
    </div>
  );
};

export default OrderSummary;