import sql from 'mssql';
import { config } from 'dotenv';

config();

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: true,
    }, 
};

let pool;

export const connectDB = async () => {
    if (!pool) {
        try {
            pool = await sql.connect(dbConfig);
            console.log(`Conectado a la base de datos: ${dbConfig.database}`);
        } catch (err) {
            console.error('Error de conexión a la base de datos: ', err);
            throw err;
        }
    }
    return pool;
};

export const closeDB = async () => {
    if (pool) {
        try {
            await pool.close();
            console.log('Conexión a la base de datos cerrada');
        } catch (err) {
            console.error('Error cerrando la conexión a la base de datos: ', err);
        }
    }
};