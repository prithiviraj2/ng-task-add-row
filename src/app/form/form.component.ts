import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  sampleform!: FormGroup;
  obj: any = {}
  @Output() tableDataValues = new EventEmitter<string>();



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.sampleform = this.fb.group({
      name: [''],
      number: [''],
      address: [''],
    });
    this.obj = this.sampleform.value
  }
  submit() {
    console.log(this.sampleform.value);
    this.tableDataValues.emit(this.sampleform.value);

  }
}
