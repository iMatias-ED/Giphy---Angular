import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuItems!: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.menuItems = [
        {label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ["/home"] },
        {label: 'Buscar', icon: 'pi pi-fw pi-search', routerLink: ["/search"]},
    ];
}

}
