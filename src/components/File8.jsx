import FoodCard from '../components/FoodCard';
import foods from '../api/foods';

const FoodPage = ({ food }) => {
  return (
    <div>
      <h1>{food.name}</h1>
      <FoodCard food={food} />
    </div>
  );
};

export default FoodPage;