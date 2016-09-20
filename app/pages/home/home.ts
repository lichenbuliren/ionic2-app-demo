import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ActionSheetsPage } from '../action-sheets/action-sheets';
import { AlertsPage } from '../alerts/alerts';
import { BadgesPage } from '../badges/badges';

/*
  Generated class for the HomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {

  private pageConfig: Object = {
    'actionSheets': ActionSheetsPage,
    'alerts': AlertsPage,
    'badges': BadgesPage
  }

  constructor(private navCtrl: NavController) {

  }

  showDemo(type: string) {
    this.navCtrl.push(this.pageConfig[type]);
  }

}
