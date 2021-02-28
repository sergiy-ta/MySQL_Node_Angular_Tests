import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(
    private http: HttpClient
  ) { }

  save(info: { name: string }): Observable<{ data: { name: string } }> {
    console.log(info);
    return this.http.post<{ data: { name: string } }>('/api/v1/department', info);
  }
}
