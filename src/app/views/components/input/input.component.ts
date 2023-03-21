import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})

export class InputComponent {
  constructor() { }

  inputFormControl = new FormControl('', [
    Validators.required
  ]);

  public valor = '';
}