
import config from "./environment"
import { Pool, QueryResult } from "pg"

const pool = new Pool({
    user: config.databaseUser,
    password: config.databasePassword,
    host: config.databaseHost,
    port: config.databasePort,
    database: config.databaseName

});

export const query = (text: string, params?: any[]): Promise<QueryResult> => pool.query(text,params)

export const testConnection = async() => {
    try{
        await pool.query('SELECT NOW()');
        console.log('Database Connected');
    } catch(error) {
        console.error('Database failed to connect', error)
        throw error
    }
};

