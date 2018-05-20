import { Routes } from '@angular/router';

import { SeriadoComponent } from './seriado/seriado.component';
import { TorrentComponent } from './torrent/torrent.component';

export const MULTIMIDIA_ROUTES : Routes = [{
    path: '',
        data: {
            breadcrumb: 'Multimidia',
            status: false
        },
        children: [{
            path: 'pesquisa-seriado',
            component: SeriadoComponent,
            data: {
                breadcrumb: 'Pesquisa de Seriado',
                status: true
            }
        },{
            path: 'pesquisa-torrent',
            component: TorrentComponent,
            data: {
                breadcrumb: 'Pesquisa de Torrent',
                status: true
            }
        }]
}]