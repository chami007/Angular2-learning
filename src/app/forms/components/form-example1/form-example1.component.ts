import { Component } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, FormArray, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'fau-form-example1',
  templateUrl: './form-example1.component.html',
  styles: []
})
export class FormExample1Component {

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
      username: [''],
      password: [''],
      confirm: [''],
      newsletter: ['']
    });
  }

}
