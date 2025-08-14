import { useState } from 'react';

const OrderForm = () => {
  const [quantity, setQuantity] = useState(1);
  const [foodId, setFoodId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity, foodId }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
      </label>
      <label>
        Food ID:
        <input type="text" value={foodId} onChange={(event) => setFoodId(event.target.value)} />
      </label>
      <button type="submit">Place order</button>
    </form>
  );
};

export default OrderForm;