import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-more-department',
  templateUrl: './more-department.component.html',
  styleUrls: ['./more-department.component.scss']
})
export class MoreDepartmentComponent implements OnInit {
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

}
