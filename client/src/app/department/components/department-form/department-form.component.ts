import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.scss']
})
export class DepartmentFormComponent implements OnInit, OnChanges {
  form: FormGroup;

  @Input() dpName: string;

  @Output() send = new EventEmitter<{ dpName: string }>();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      dpName: [null, [Validators.required]]
    });
  }

  ngOnChanges(): void {
    this.form = this.formBuilder.group({
      dpName: [this.dpName, [Validators.required]]
    });
  }

  sendForm(info: { dpName: string }): void {
    this.send.emit(info);
  }
}
