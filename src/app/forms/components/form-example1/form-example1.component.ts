import { Component } from '@angular/core';
import { AbstractControl, FormGroup,
  FormControl, FormArray, FormBuilder,
  Validators} from '@angular/forms';

@Component({
  selector: 'fau-form-example1',
  templateUrl: './form-example1.component.html',
  styles: []
})
export class FormExample1Component {

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      firstName: [''],
      lastName: [''],
      account: fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
        confirm: ['', Validators.required],
      }, { validator: this.passwordMatcher }),
      newsletter: ['']
    });

    this.form.patchValue({
      firstName: ['Chamal'],
      lastName: ['Liyanage'],
      username: ['Chami007'],
      password: ['pwd'],
      confirm: ['pwd'],
      newsletter: ['yes']
    });
  }

  passwordMatcher(c: AbstractControl) {
    return c.get('password').value === c.get('confirm').value
      ? null : { 'nomatch': true };
  }

  onSubmit() {
    console.log(this.form);
  }

}
