import { query } from "#config/database.js";
import { readFileSync } from "fs";
import {join} from "path"

export async function initializeDatabase() {
    try {
        console.log("Create Table If Not Exist");

        const schemaPath = join(__dirname, 'schema.sql');
        const schema = readFileSync(schemaPath, 'utf-8');

        await query(schema);
        console.log("Database Schema Created");
    }   catch (error) {
        console.error("Database Initialization Failed", error);
        throw error
    }
}


