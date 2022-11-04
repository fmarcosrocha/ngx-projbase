import { Component, Input } from '@angular/core';

@Component({
  selector: 'mj-footer',
  templateUrl: './mj-footer.component.html'
})
export class MjFooterComponent {
  constructor() { }

  @Input() licenca = `ORG. LTDA - ${new Date().getFullYear()}`;
  @Input() licencaMobile = `ORG. LTDA - ${new Date().getFullYear()}`;
}
