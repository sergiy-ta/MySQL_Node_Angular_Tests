import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../service/employees.service';

@Component({
  selector: 'app-save-employees',
  templateUrl: './save-employees.component.html',
  styleUrls: ['./save-employees.component.scss']
})
export class SaveEmployeesComponent implements OnInit {

  constructor(
    private employeesService: EmployeesService
  ) { }

  ngOnInit(): void {
  }

  save(info: { empName: string, empActive: boolean, emp_dpID: string }): void {
    this.employeesService.save(info).subscribe(
      res => {
        if (res.data) {
          alert('Збережено успішно');
        }
      },
      error => console.error(error)
    );
  }

}
