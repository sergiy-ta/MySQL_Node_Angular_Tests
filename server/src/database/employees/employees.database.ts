import Create from "../../interface/class/create";
import Employees from "../../interface/object/employees";
import Database from "../database";

export default class EmployeesDatabase extends Database implements Create<Employees> {
    constructor() {
        super();
    }

    public async create(info: { empName: string, empActive: boolean, emp_dpID: number }): Promise<Employees> {
        const query: string = 'INSERT INTO tblEmployees (empName, empActive, emp_dpID) VALUES (?, ?, ?);';
        const insertId: number = await super.createInDatabase({ query, data: [info.empName, info.empActive, info.emp_dpID] });

        return { empID: insertId, empName: info.empName, empActive: info.empActive, emp_dpID: info.emp_dpID };
    }
}