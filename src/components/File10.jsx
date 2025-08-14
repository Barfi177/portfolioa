import OrderSummary from '../components/OrderSummary';

const OrderPage = ({ order }) => {
  return (
    <div>
      <h1>Order {order.id}</h1>
      <OrderSummary order={order} />
    </div>
  );
};

export default OrderPage;