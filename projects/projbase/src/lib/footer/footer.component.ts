import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  constructor() { }

  @Input() licenca = `ORG. LTDA - ${new Date().getFullYear()}`;
  @Input() licencaMobile = `ORG. LTDA - ${new Date().getFullYear()}`;
}
