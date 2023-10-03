import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouting } from 'app/app.routing';

import { AppComponent } from 'app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AccordionComponent,
  AvatarComponent,
  ButtonComponent,
  CardComponent,
  DatatableComponent,
  DateTimePickerComponent,
  InputComponent,
  InputFileComponent,
  ModalComponent,
  ModalExampleComponent,
  RadioButtonComponent,
  SelectComponent,
  HowToStartComponent,
  AboutComponent,
  HowToUseComponent,
  NotificationComponent,
  SsoComponent,
  BreadcumbComponent
} from 'app/views';
import { MaterialModule } from 'app/components';
/* if you're developing, to not build the lib everytime, do it below... */
import { ProjBaseModule } from '../../projects/projbase/src/public-api';
/* if you're building the lib, do it below... */
// import { ProjBaseModule } from 'projbase';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AvatarComponent,
    BreadcumbComponent,
    ButtonComponent,
    CardComponent,
    DatatableComponent,
    DateTimePickerComponent,
    InputComponent,
    InputFileComponent,
    ModalComponent,
    ModalExampleComponent,
    RadioButtonComponent,
    SelectComponent,
    HowToStartComponent,
    AboutComponent,
    HowToUseComponent,
    NotificationComponent,
    SsoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouting,
    BrowserAnimationsModule,
    MaterialModule,
    ProjBaseModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
