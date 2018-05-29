import { Routes } from '@angular/router';

import { PesquisaSeriadoComponent } from './seriado/pesquisaseriado/pesquisaseriado.component';
import { TorrentComponent } from './torrent/torrent.component';
import { CadastroSeriadoComponent } from './seriado/cadastroseriado/cadastroseriado.component';

export const MULTIMIDIA_ROUTES : Routes = [{
    path: '',
        data: {
            breadcrumb: 'Cadastro',
            status: false
        },
        children: [
        {
            path: '',
            component: PesquisaSeriadoComponent,
            data: {
                breadcrumb: 'Pesquisa de Seriado',
                status: true
            }            
        },{
            path: 'pesquisa-seriado',
            component: PesquisaSeriadoComponent,
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
        },{
            path: 'cadastro-seriado',
            component: CadastroSeriadoComponent,
            data: {
                breadcrumb: 'Cadastro de Seriado',
                status: true
            }
        }]
}]