import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from DALL-E Server');
});

const startServer = async () => {
  const port = process.env.PORT || 5000;
  app.listen(port, () =>
    console.log(`Listening on port http://localhost:${port}`)
  );
};
startServer();
