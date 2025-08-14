import OrderSummary from './OrderSummary';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <h2>{user.name}'s Profile</h2>
      <h3>Order History</h3>
      <ul>
        {user.orders.map((order) => (
          <li key={order.id}>
            <OrderSummary order={order} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;