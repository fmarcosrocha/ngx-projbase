import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  constructor() { }

  @Input() license = `ORG. LTDA - ${new Date().getFullYear()}`;
}
