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

  public save(info: { empName: string, empActive: boolean, emp_dpID: string }): Observable<{ data: Employees }> {
    return this.http.post<{ data: Employees }>(environment.urlForServer + '/api/v1/employees', info);
  }

  public getList(): Observable<{ data: Employees[] }> {
    return this.http.get<{ data: Employees[] }>(environment.urlForServer + '/api/v1/employees');
  }
}
