import EmployeesDatabase from "../../database/employees/employees.database";
import Create from "../../interface/class/create";
import Employees from "../../interface/object/employees";

export default class EmployeesService implements Create<Employees> {
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
}