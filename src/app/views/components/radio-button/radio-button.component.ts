import { Component } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html'
})

export class RadioButtonComponent {
  constructor() { }

  item?: string;
  items: string[] = ['Angular', 'React', 'Vuejs'];
}
