import express from 'express';
import { config } from 'dotenv';
import helloRoutes from './routes/helloRoutes.js';

config();

const app = express();
const port = process.env.PORT || 3000;

app.use('/', helloRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});