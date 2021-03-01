import Create from "../../interface/class/create";
import Delete from "../../interface/class/delete";
import Get from "../../interface/class/get";
import GetList from "../../interface/class/getList";
import Update from "../../interface/class/update";
import Employees from "../../interface/object/employees";
import Database from "../database";

export default class EmployeesDatabase extends Database<Employees> implements Create<Employees>, Get<Employees>, GetList<Employees>, Update, Delete {
    constructor() {
        super();
    }

    public async create(info: { empName: string, empActive: boolean, emp_dpID: number }): Promise<Employees> {
        const query: string = 'INSERT INTO tblEmployees (empName, empActive, emp_dpID) VALUES (?, ?, ?);';
        const insertId: number = await super.createInDatabase({ query, data: [info.empName, info.empActive, info.emp_dpID] });

        return { empID: insertId, empName: info.empName, empActive: info.empActive, emp_dpID: info.emp_dpID };
    }

    public get(info: { empID: number }): Promise<Employees> {
        const query: string = "SELECT * FROM tblEmployees WHERE empID = ?;";
        return super.getInDatabase({ query, data: [info.empID]});
    }

    public getList(): Promise<Employees[]> {
        const query: string = "SELECT * FROM tblEmployees;";
        return super.getListInDatabase({ query });
    }

    public update(info: Employees): Promise<boolean> {
        const query: string = "UPDATE tblEmployees SET empName = ?, empActive = ?, emp_dpID =? WHERE empID = ?";
        return super.updateInDatabase({ query, data: [info.empID, info.empName, info.empActive, info.emp_dpID]});
    }

    public delete(info: { empID: number }): Promise<boolean> {
        const query: string = "DELETE FROM tblEmployees WHERE empID = ?";
        return super.deleteInDatabase({ query, data: [info.empID]});
    }
}