import express from 'express';
import { config } from 'dotenv';
import helloRoutes from './routes/helloRoutes.js';
import { connectDB } from './config/db.js';

config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use('/api', helloRoutes);

const startServer = async () => {
    try {
        await connectDB();
        app.listen(port, () => {
            console.log(`Servidor escuchando en http://localhost:${port}`);
        app.get('/', (req, res) => {
          res.send('Conectado a la base de datos');
        });
        });
    const dbName = process.env.DB_NAME;
    console.log(`Conectado a la base de datos: ${dbName}`);
    } catch (err) {
        console.error('No se pudo iniciar el servidor:', err);
    }
};

startServer();