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
                state: 'simple-page',
                name: 'Cadastro',
                type: 'sub',
                icon: 'ti-layout-sidebar-left',
                children: [
                    {
                        state: 'pesquisa-seriado',
                        name: 'Seriado'
                    },{
                        state: 'alert',
                        name: 'Temporada'
                    }
                ]
            },{
                state: 'simple-page',
                name: 'Simple Page',
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
