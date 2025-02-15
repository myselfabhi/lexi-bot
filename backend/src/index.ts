import express from 'express';

const app = express();

//middleware
app.use(express.json());



//connections and listeners
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
})