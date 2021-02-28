import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-save-department',
  templateUrl: './save-department.component.html',
  styleUrls: ['./save-department.component.scss']
})
export class SaveDepartmentComponent implements OnInit {

  constructor(
    private departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
  }

  save(info: { name: string }): void {
    this.departmentService.save(info).subscribe(
      res => {
        if (res.data) {
          alert('Збережено успішно');
        }
      },
      error => console.error(error)
    );
  }

}
