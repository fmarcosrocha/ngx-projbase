import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})

export class InputComponent {
  constructor() { }

  inputFormControl = new FormControl('', [
    Validators.required
  ]);

  formGroup = new FormGroup({nome: new FormControl(null, [Validators.required])});
  environment = environment;

  public value = '';
}
