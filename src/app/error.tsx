import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/dog-food-marketplace', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));

export default db;