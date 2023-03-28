import { Component } from '@angular/core';

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html'
})

export class DateTimePickerComponent {
  constructor() { }

  public date?: Date | null;
}
