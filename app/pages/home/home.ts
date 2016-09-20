import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ActionSheetPage } from '../action-sheet/action-sheet';
import { AlertPage } from '../alert/alert';

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
    'actionSheet': ActionSheetPage,
    'alert': AlertPage
  }

  constructor(private navCtrl: NavController) {

  }

  showDemo(type: string) {
    this.navCtrl.push(this.pageConfig[type]);
  }

}
