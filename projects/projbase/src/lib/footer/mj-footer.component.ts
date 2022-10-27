import { Component, Input } from '@angular/core';

@Component({
  selector: 'mj-footer',
  templateUrl: './mj-footer.component.html'
})
export class MjFooterComponent {
  constructor() { }

  @Input() licenca: string = `MJSP - ${new Date().getFullYear()}`;
  @Input() licencaMobile: string = `MJSP - ${new Date().getFullYear()}`;
}
