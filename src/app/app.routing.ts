import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AccordionComponent,
  AvatarComponent,
  ButtonComponent,
  BreadcumbComponent,
  CardComponent,
  DatatableComponent,
  DateTimePickerComponent,
  InputComponent,
  ModalComponent,
  RadioButtonComponent,
  SelectComponent,
  HowToStartComponent,
  AboutComponent,
  SsoComponent,
  NotificationComponent,
  HowToUseComponent,
  InputFileComponent
} from 'app/views';
import { AuthGuard } from 'app/shared/guard/auth-guard';
import {HomePageComponent} from 'app/views/components/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'how-to-start', component: HowToStartComponent },
  { path: 'how-to-use', component: HowToUseComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'components', children: [
    { path: 'accordion', component: AccordionComponent },
    { path: 'avatar', component: AvatarComponent },
    { path: 'button', component: ButtonComponent },
    { path: 'breadcumb', component: BreadcumbComponent, data: { breadcrumb: 'Breadcumb', route: '/components/breadcumb' } },
    { path: 'card', component: CardComponent },
    { path: 'data-table', component: DatatableComponent },
    { path: 'date-time-picker', component: DateTimePickerComponent },
    { path: 'input', component: InputComponent },
    { path: 'input-file', component: InputFileComponent },
    { path: 'modal', component: ModalComponent },
    { path: 'radio-button', component: RadioButtonComponent },
    { path: 'select', component: SelectComponent },
    { path: 'notifications', component: NotificationComponent }
  ] },
  { path: 'sso', component: SsoComponent, canActivate: [AuthGuard], data: {roles: ['admin']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRouting { }
