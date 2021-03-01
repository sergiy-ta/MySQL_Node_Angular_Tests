import DepartmentDatabase from "../../database/department/department.database";
import Create from "../../interface/class/create";
import Get from "../../interface/class/get";
import GetList from "../../interface/class/getList";
import Department from "../../interface/object/department";

export default class DepartmentService implements Create<Department>, Get<Department>, GetList<Department> {
    private readonly departmentDatabase: DepartmentDatabase;

    constructor() {
        this.departmentDatabase = new DepartmentDatabase();
    }

    public create(info: { dpName: string }): Promise<Department> {
        return this.departmentDatabase.create(info);
    }

    public get(info: { dpID: number }): Promise<Department> {
        return this.departmentDatabase.get(info);
    }

    public getList(): Promise<Department[]> {
        return this.departmentDatabase.getList();
    }
}