import { Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch: 'full'
  },
{
  path:'home',
  component:MainComponent,
  children: [
    { path: '', redirectTo: 'personal', pathMatch: 'full' },
    { path: 'personal', loadComponent:() => import('./pages/personal/personal.component')
    .then(c => c.PersonalComponent) },
    { path: 'select', loadComponent:()=> import('./pages/select/select.component')
    .then(c=> c.SelectComponent)},
    { path: 'add-ons', loadComponent:()=> import('./pages/add-ons/add-ons.component')
    .then(c=> c.AddOnsComponent)},
    { path: 'summary', loadComponent:()=> import('./pages/summary/summary.component')
    .then(c=> c.SummaryComponent)},
    { path: 'thank-you', loadComponent:()=> import('./pages/thanks/thanks.component')
    .then(c=> c.ThanksComponent)}
]

}
];
