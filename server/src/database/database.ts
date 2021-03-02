import mysql from 'mysql';

export default class Database<T> {
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

    protected async createInDatabase(info: { query: string, data: any[] }): Promise<number> {
        return (await this.workWithData(info)).insertId;
    }

    protected getInDatabase(info: { query: string, data: any[] }): Promise<T> {
        return this.workWithData(info);
    }

    protected getListInDatabase(info : { query: string }): Promise<T[]> {
        return this.workWithoutData(info);
    }

    protected async updateInDatabase(info: { query: string, data: any[] }): Promise<boolean> {
        return !!(await this.workWithData(info));
    }

    protected async deleteInDatabase(info: { query: string, data: any[] }): Promise<boolean> {
        return !!(await this.workWithData(info));
    }

    private workWithData(info: { query: string, data: any[] }): Promise<any> {
        return new Promise<boolean>((resolve, reject) => {
            this.getConnection().query(info.query, info.data, (error, result) => {
                if (error) reject(new Error(error.message));

                resolve(result);
            });
        });
    }

    private workWithoutData(info: { query: string }): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.getConnection().query(info.query, (error, result) => {
                if (error) reject(new Error(error.message));

                resolve(result);
            });
        });
    }
}