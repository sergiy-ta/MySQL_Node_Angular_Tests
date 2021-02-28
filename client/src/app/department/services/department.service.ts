import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(
    private http: HttpClient
  ) { }

  save(info: { name: string }): Observable<{ data: { name: string } }> {
    return this.http.post<{ data: { name: string } }>(environment.urlForServer + '/api/v1/department', info);
  }
}
