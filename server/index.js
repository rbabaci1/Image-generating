import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config(); // load .env file

const app = express(); // create express app
app.use(cors()); // enable cors
app.use(express.json({ limit: '50mb' })); // enable json body parsing

// routes
app.use('/api/v1/posts', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', (req, res) => {
  res.send('Hello from DALL-E!');
});

try {
  connectDB(process.env.MONGODB_URL);

  app.listen(process.env.PORT || 8080, () => {
    console.log(`Server started on port ${process.env.PORT}`);
  });
} catch (error) {
  console.log(error);
}
