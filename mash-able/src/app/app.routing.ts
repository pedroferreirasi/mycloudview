import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { TorrentComponent } from './multimidia/torrent/torrent.component';
import { SeriadoComponent } from './multimidia/seriado/seriado.component';

export const AppRoutes: Routes = [
{
  path: '',
  component: AdminLayoutComponent,
  children: [
    {
      path: 'simple-page',
      loadChildren: './simple-page/simple-page.module#SimplePageModule'
    },{
      path: 'multimidia',
      loadChildren: './multimidia/multimidia.module#MultimidiaModule'
    }
  ]
},{
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