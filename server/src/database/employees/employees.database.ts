import Create from "../../interface/class/create";
import Get from "../../interface/class/get";
import GetList from "../../interface/class/getList";
import Employees from "../../interface/object/employees";
import Database from "../database";

export default class EmployeesDatabase extends Database<Employees> implements Create<Employees>, Get<Employees>, GetList<Employees> {
    constructor() {
        super();
    }

    public async create(info: { empName: string, empActive: boolean, emp_dpID: number }): Promise<Employees> {
        const query: string = 'INSERT INTO tblEmployees (empName, empActive, emp_dpID) VALUES (?, ?, ?);';
        const insertId: number = await super.createInDatabase({ query, data: [info.empName, info.empActive, info.emp_dpID] });

        return { empID: insertId, empName: info.empName, empActive: info.empActive, emp_dpID: info.emp_dpID };
    }

    public get(info: { empID: number }): Promise<Employees> {
        const query = "SELECT * FROM tblEmployees WHERE empID = ?;";
        return super.getInDatabase({ query, data: [info.empID]});
    }

    public getList(): Promise<Employees[]> {
        const query = "SELECT * FROM tblEmployees;";
        return super.getListInDatabase({ query });
    }
}