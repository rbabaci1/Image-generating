import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config(); // load .env file

const app = express(); // create express app
app.use(cors()); // enable cors
app.use(express.json({ limit: '50mb' })); // enable json body parsing

app.get('/', (req, res) => {
  res.send('Hello from DALL-E!');
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
