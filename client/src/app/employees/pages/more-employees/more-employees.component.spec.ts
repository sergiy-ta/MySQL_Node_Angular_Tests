import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreEmployeesComponent } from './more-employees.component';

describe('MoreEmployeesComponent', () => {
  let component: MoreEmployeesComponent;
  let fixture: ComponentFixture<MoreEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
