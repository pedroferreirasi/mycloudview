import {Injectable} from '@angular/core';

export interface BadgeItem {
    type: string;
    value: string;
}

export interface ChildrenItems {
    state: string;
    target?: boolean;
    name: string;
    type?: string;
    children?: ChildrenItems[];
}

export interface MainMenuItems {
    state: string;
    main_state?: string;
    target?: boolean;
    name: string;
    type: string;
    icon: string;
    badge?: BadgeItem[];
    children?: ChildrenItems[];
}

export interface Menu {
    label: string;
    main: MainMenuItems[];
}

const MENUITEMS = [
    {
        label: 'Multimidia',
        main: [
            {
                state: 'multimidia',
                name: 'Cadastro',
                type: 'sub',
                icon: 'ti-view-list-alt',
                children: [
                    {
                        state: 'pesquisa-seriado',
                        name: 'Seriado'
                    },{
                        state: 'pesquisa-torrent',
                        name: 'Torrent'
                    }
                ]
            },{
                state: 'pesquisa-seriado',
                name: 'Seriado',
                type: 'link',
                icon: 'ti-layout-sidebar-left'
            }
        ]
    }
];

@Injectable()
export class MenuItems {
    getAll(): Menu[] {
        return MENUITEMS;
    }

    /*add(menu: Menu) {
      MENUITEMS.push(menu);
    }*/
}
