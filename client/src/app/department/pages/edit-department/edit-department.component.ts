import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.scss']
})
export class EditDepartmentComponent implements OnInit {
  dpID: number;
  dpName: string;

  constructor(
    private route: ActivatedRoute,
    private departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.get(+params.dpID);
    });
  }


  private get(dpID: number): void {
    this.departmentService.get({ dpID }).subscribe(
      res => {
        this.dpID = res.data.dpID;
        this.dpName = res.data.dpName;
      }
    );
  }

  edit(info: { dpName: string }): void {
    this.departmentService.edit({ dpID: this.dpID, dpName: info.dpName }).subscribe(
      res => {
        if (res.data) {
          alert('Оновленно успішно');
        }
      },
      error => console.error(error)
    );
  }

}
