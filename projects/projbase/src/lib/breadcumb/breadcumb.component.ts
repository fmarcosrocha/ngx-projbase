import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Breadcrumb, BreadcrumbService } from '../breadcumb.service';

@Component({
  selector: 'lib-breadcumb',
  templateUrl: './breadcumb.component.html'
})

export class BreadcumbComponent {
  constructor(
    private _breadcrumbService: BreadcrumbService,
    private _breakpointObserver: BreakpointObserver) {

    this.breadcrumbs$ = _breadcrumbService.breadcrumbs$;

    this._breakpointObserver.observe(['(orientation: portrait)', '(orientation: landscape)',]).subscribe(result => {
      this.isSmallScreen = _breakpointObserver.isMatched('(max-width: 599px)');
    });
  }

  breadcrumbs$: Observable<Breadcrumb[]>;
  public isSmallScreen: boolean = false;
}
