import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProjBaseRouting} from './proj-base-routing.module';
import {MainContainerComponent} from './main-container/main-container.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {BreadcumbComponent} from './breadcumb/breadcumb.component';
import {FileDropDirective} from './directives/file-drop.directive';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatChipsModule} from '@angular/material/chips';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import {BreadcrumbService} from './breadcumb.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputLabelComponent} from './components/input/input-label/input-label.component';
import {InputTextTransformDirective} from './directives/input-text-transform.directive';
import {FormDebugComponent} from './components/form/form-debug.component';
import {HideProdDirective} from './directives/hide-prod.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {InputTextFieldComponent} from './components/input/input-text-field/input-text-field.component';

const MaterialComponents = [
  ProjBaseRouting,
  CommonModule,
  MatToolbarModule,
  MatIconModule,
  MatBadgeModule,
  MatButtonModule,
  MatMenuModule,
  MatChipsModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatDividerModule,
  MatTableModule,
  MatPaginatorModule,
  MatTooltipModule,
  MatExpansionModule
];

@NgModule({
  declarations: [
    MainContainerComponent,
    NavbarComponent,
    FooterComponent,
    BreadcumbComponent,
    InputTextFieldComponent,
    InputLabelComponent,
    FormDebugComponent,
    // directives
    FileDropDirective,
    InputTextTransformDirective,
    HideProdDirective
  ],
  imports: [
    MaterialComponents,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    // MaterialComponents,
    MainContainerComponent,
    NavbarComponent,
    FooterComponent,
    BreadcumbComponent,
    InputTextFieldComponent,
    FormDebugComponent,
    // directives
    FileDropDirective,
    InputTextTransformDirective,
    HideProdDirective
  ],
  providers: [
    BreadcrumbService
  ]
})
export class ProjBaseModule {
}
