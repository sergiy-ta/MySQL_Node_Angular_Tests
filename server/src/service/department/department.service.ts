import DepartmentDatabase from "../../database/department/department.database";
import Create from "../../interface/class/create";
import Get from "../../interface/class/get";
import Department from "../../interface/object/department";

export default class DepartmentService implements Create<Department>, Get<Department> {
    private readonly departmentDatabase: DepartmentDatabase;

    constructor() {
        this.departmentDatabase = new DepartmentDatabase();
    }

    public create(info: { name: string }): Promise<Department> {
        return this.departmentDatabase.create(info);
    }

    public get(info: { dpID: number }): Promise<Department> {
        return this.departmentDatabase.get(info);
    }
}