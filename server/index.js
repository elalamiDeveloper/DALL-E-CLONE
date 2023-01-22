import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongo/connectDB.js';
import { router as postRouter } from './routes/postRoutes.js';
import { router as dalleRouter } from './routes/dalleRoutes.js';

dotenv.config();
const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(cors());

app.use('/api/v1/posts', postRouter);
app.use('/api/v1/dalle', dalleRouter);

const startServer = () => {
  const port = process.env.PORT || 5000;
  const db_url = process.env.MONGO_URL.replace(
    '<PASSWORD>',
    process.env.MONGO_PASSWORD
  );

  connectDB(db_url);
  app.listen(port, () =>
    console.log(`Listening on port http://localhost:${port}`)
  );
};
startServer();
