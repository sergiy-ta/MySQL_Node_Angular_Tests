import DepartmentDatabase from "../../database/department/department.database";
import Department from "../../interface/object/department";

export default class DepartmentService {
    private readonly departmentDatabase: DepartmentDatabase;

    constructor() {
        this.departmentDatabase = new DepartmentDatabase();
    }

    public create(info: { name: string }): Promise<Department> {
        return this.departmentDatabase.create(info);
    }
}