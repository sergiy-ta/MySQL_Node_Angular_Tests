import Department from "../../interface/object/department";
import Database from "../database";

export default class DepartmentDatabase extends Database {

    constructor() {
        super();
    }

    public create(info: { name: string }): Promise<Department> {
        return new Promise<Department>((resolve, reject) => {
            const query: string = 'INSERT INTO tblDepartments (dpName) VALUES (?);';

            super.getConnection().query(query, [info.name], (error, result) => {
                if (error) reject(new Error(error.message));

                resolve({ dpID: result.insertId, dpName: info.name });
            });
        });
    }
}