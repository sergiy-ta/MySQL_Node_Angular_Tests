import Create from "../../interface/class/create";
import Get from "../../interface/class/get";
import GetList from "../../interface/class/getList";
import Department from "../../interface/object/department";
import Database from "../database";

export default class DepartmentDatabase extends Database implements Create<Department>, Get<Department>, GetList<Department> {

    constructor() {
        super();
    }

    public async create(info: { dpName: string }): Promise<Department> {
        const query: string = 'INSERT INTO tblDepartments (dpName) VALUES (?);';
        const insertId: number = await super.createInDatabase({ query, data: [info.dpName] });

        return { dpID: insertId, dpName: info.dpName };
    }

    public get(info: { dpID: number }): Promise<Department> {
        return new Promise<Department>((resolve, reject) => {
            const query = "SELECT * FROM tblDepartments WHERE dpID = ?;";

            super.getConnection().query(query, [info.dpID], (error, result) => {
                if (error) reject(new Error(error.message));

                resolve(result);
            });
        });
    }

    public getList(): Promise<Department[]> {
        return new Promise<Department[]>((resolve, reject) => {
            const query = "SELECT * FROM tblDepartments;";

            super.getConnection().query(query, (error, result) => {
                if (error) reject(new Error(error.message));

                resolve(result);
            });
        });
    }
}