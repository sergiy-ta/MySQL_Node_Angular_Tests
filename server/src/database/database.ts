import mysql from 'mysql';

export default class Database {
    private readonly connection: mysql.Connection;

    constructor() {
        this.connection = mysql.createConnection({
            host: process.env.DATABASE_HOST ?? 'localhost',
            user: process.env.DATABASE_USER ?? 'user',
            password: process.env.DATABASE_PASSWORD ?? 'user',
            database: process.env.DATABASE ?? 'user',
            port: process.env.DATABASE_PORT ? +process.env.DATABASE_PORT : 8889
        });
    }

    protected getConnection(): mysql.Connection {
        return this.connection;
    }
}