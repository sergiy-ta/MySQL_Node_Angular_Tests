import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { EditDepartmentComponent } from './edit-department.component';

describe('EditDepartmentComponent', () => {
  let component: EditDepartmentComponent;
  let fixture: ComponentFixture<EditDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientModule ],
      declarations: [ EditDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
