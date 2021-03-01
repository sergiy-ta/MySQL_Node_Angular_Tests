import EmployeesDatabase from "../../database/employees/employees.database";
import Create from "../../interface/class/create";
import Get from "../../interface/class/get";
import GetList from "../../interface/class/getList";
import Update from "../../interface/class/update";
import Employees from "../../interface/object/employees";

export default class EmployeesService implements Create<Employees>, Get<Employees>, GetList<Employees>, Update {
    private readonly employeesDatabase: EmployeesDatabase;

    constructor() {
        this.employeesDatabase = new EmployeesDatabase();
    }

    public create(info: { empName: string, empActive: boolean, emp_dpID: number }): Promise<Employees> {
        return this.employeesDatabase.create(info);
    }

    public get(info: { empID: number }): Promise<Employees> {
        return this.employeesDatabase.get(info);
    }

    public getList(): Promise<Employees[]> {
        return  this.employeesDatabase.getList();
    }

    public update(info: Employees): Promise<boolean> {
        return this.employeesDatabase.update(info);
    }

    public delete(info: { empID: number }): Promise<boolean> {
        return this.employeesDatabase.delete(info);
    }
}