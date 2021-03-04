import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employees } from '../interface/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(
    private http: HttpClient
  ) { }

  public save(info: { empName: string, empActive: boolean, emp_dpID: number }): Observable<{ data: Employees }> {
    return this.http.post<{ data: Employees }>(environment.urlForServer + '/api/v1/employees', info);
  }

  public get(info: { empID: number }): Observable<{ data: Employees }> {
    return this.http.get<{ data: Employees }>(environment.urlForServer + '/api/v1/employees/' + info.empID);
  }

  public getList(): Observable<{ data: Employees[] }> {
    return this.http.get<{ data: Employees[] }>(environment.urlForServer + '/api/v1/employees');
  }

  public edit(info: { empID: number, empName: string, empActive: boolean, emp_dpID: number }): Observable<{ data: boolean }> {
    return this.http.put<{ data: boolean }>(environment.urlForServer + '/api/v1/employees', info);
  }
}
