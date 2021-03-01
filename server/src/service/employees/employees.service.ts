import EmployeesDatabase from "../../database/employees/employees.database";
import Create from "../../interface/class/create";
import Get from "../../interface/class/get";
import GetList from "../../interface/class/getList";
import Employees from "../../interface/object/employees";

export default class EmployeesService implements Create<Employees>, Get<Employees>, GetList<Employees> {
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
}