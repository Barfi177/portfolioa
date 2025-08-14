import FoodList from '../components/FoodList';
import foods from '../api/foods';

const HomePage = () => {
  const foodsData = foods();
  return (
    <div>
      <h1>Dog Food Marketplace</h1>
      <FoodList foods={foodsData} />
    </div>
  );
};

export default HomePage;