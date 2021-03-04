import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { DeleteEmployeesComponent } from './delete-employees.component';

describe('DeleteEmployeesComponent', () => {
  let component: DeleteEmployeesComponent;
  let fixture: ComponentFixture<DeleteEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientModule ],
      declarations: [ DeleteEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
