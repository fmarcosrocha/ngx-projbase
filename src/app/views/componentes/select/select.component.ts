import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html'
})

export class SelectComponent {
  constructor() { }

  inputFormControl = new FormControl('', [
    Validators.required
  ]);

  public valor = '';
}
