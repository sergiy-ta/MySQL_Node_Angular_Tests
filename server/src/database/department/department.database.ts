import Create from "../../interface/class/create";
import Delete from "../../interface/class/delete";
import Get from "../../interface/class/get";
import GetList from "../../interface/class/getList";
import Department from "../../interface/object/department";
import Database from "../database";

export default class DepartmentDatabase extends Database<Department> implements Create<Department>, Get<Department>, GetList<Department>, Delete {

    constructor() {
        super();
    }

    public async create(info: { dpName: string }): Promise<Department> {
        const query: string = 'INSERT INTO tblDepartments (dpName) VALUES (?);';
        const insertId: number = await super.createInDatabase({ query, data: [info.dpName] });

        return { dpID: insertId, dpName: info.dpName };
    }

    public async get(info: { dpID: number }): Promise<Department> {
        const query = "SELECT * FROM tblDepartments WHERE dpID = ?;";
        return (await super.getInDatabase({ query, data: [info.dpID]}))[0];
    }

    public getList(): Promise<Department[]> {
        const query = "SELECT * FROM tblDepartments;";
        return super.getListInDatabase({ query });
    }

    public delete(info: { dpID: number }): Promise<boolean> {
        const query: string = "DELETE FROM tblDepartments WHERE c = ?";
        return super.deleteInDatabase({ query, data: [info.dpID]});
    }
}