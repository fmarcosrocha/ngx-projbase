import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: `[hideInProd]`,
})
export class HideProdDirective implements OnInit {

  @Input('hideInProd') environment: any;

  constructor(private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    if (!this.environment?.production) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}
