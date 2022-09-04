import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { BaMenuService } from '../theme';
import {CONSTANTS} from "../app.const";
import {MenuService} from "../services/menu.service";

@Component({
  selector: 'pages',
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>

    <ba-back-top position="200"></ba-back-top>
    `
})
export class Pages {
  public pagesMenu:any = [];
  constructor(private _menuService: BaMenuService,private menuService:MenuService ) {
  }
  ngOnInit() {
    this.menuService.list().then(result => {
     if(result.success) {
       this.pagesMenu = JSON.parse(result.data.replace(/\'/g,"\""));
       this._menuService.updateMenuByRoutes(<Routes> this.pagesMenu);
     }
      });

  }
}
