import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department } from '../interface/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(
    private http: HttpClient
  ) { }

  public save(info: { dpName: string }): Observable<{ data: Department }> {
    return this.http.post<{ data: Department }>(environment.urlForServer + '/api/v1/department', info);
  }

  public get(info: { dpID: number }): Observable<{ data: Department }> {
    return this.http.get<{ data: Department }>(environment.urlForServer + '/api/v1/department/' + info.dpID);
  }

  public getList(): Observable<{ data: Department[] }> {
    return this.http.get<{ data: Department[] }>(environment.urlForServer + '/api/v1/department');
  }

  public edit(info: Department): Observable<{ data: boolean }> {
    return this.http.put<{ data: boolean }>(environment.urlForServer + '/api/v1/department', info);
  }
}
