import db from './db';

const foods = async () => {
  const foodsCollection = db.collection('foods');
  const foods = await foodsCollection.find().toArray();
  return foods;
};

export default foods;