import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  children: [
    {
      path: 'simple-page',
      loadChildren: './simple-page/simple-page.module#SimplePageModule'
    }
  ]
}, {
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'error',
    loadChildren: './error/error.module#ErrorModule'
  },]
}, {
  path: '**',
  redirectTo: 'error/404'
}];