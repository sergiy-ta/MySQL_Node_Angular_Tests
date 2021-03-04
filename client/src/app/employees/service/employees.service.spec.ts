import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { EmployeesService } from './employees.service';

describe('EmployeesService', () => {
  let service: EmployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ]
    });
    service = TestBed.inject(EmployeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
