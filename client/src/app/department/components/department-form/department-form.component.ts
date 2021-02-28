import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.scss']
})
export class DepartmentFormComponent implements OnInit, OnChanges {
  form: FormGroup;

  @Input() name: string;

  @Output() send = new EventEmitter<{ name: string }>();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]]
    });
  }

  ngOnChanges(): void {
    this.form = this.formBuilder.group({
      name: [this.name, [Validators.required]]
    });
  }

  sendForm(info: { name: string }): void {
    this.send.emit(info);
  }
}
