import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html'
})

export class AccordionComponent {
  constructor() { }

  public ctrl = {
    index: 0,
    opened: (index: number) => {
      this.ctrl.index = index;
    }
  }
}
