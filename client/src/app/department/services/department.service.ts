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

  save(info: { dpName: string }): Observable<{ data: { dpName: string } }> {
    return this.http.post<{ data: { dpName: string } }>(environment.urlForServer + '/api/v1/department', info);
  }
}
