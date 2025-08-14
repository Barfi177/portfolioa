import Image from 'next/image';
import Link from 'next/link';

const FoodCard = ({ food }) => {
  return (
    <div className="food-card">
      <Image src={`/images/${food.image}`} alt={food.name} />
      <h2>{food.name}</h2>
      <p>{food.description}</p>
      <p>${food.price}</p>
      <Link href={`/food/${food.id}`}>
        <a>View details</a>
      </Link>
    </div>
  );
};

export default FoodCard;