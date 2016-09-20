import { Component } from '@angular/core';
import { ActionSheetController, NavController, Platform} from 'ionic-angular';

/*
  Generated class for the ActionSheetsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/action-sheets/action-sheet.html',
})
export class ActionSheetPage {

  private title: string = 'Action Sheets';

  constructor(private navCtrl: NavController,
    private actionSheetCtrl: ActionSheetController,
    private platform: Platform) {
  }

  openActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: !this.platform.is('ios') ? 'trash' : null,
        handler: () => {
          console.log('Delete clickd');
        }
      },{
        text: 'Share',
        icon: !this.platform.is('ios') ? 'share' : null,
        handler: () => {
          console.log('Share clicked');
        }
      },{
        text: 'Play',
        icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
        handler: () => {
          console.log('Play clicked');
        }
      },{
        text: 'Favorite',
        icon: !this.platform.is('ios') ? 'heart-outline' : null,
        handler: () => {
          console.log('Favorite clicked');
        }
      },{
        text: 'Cancel',
        icon: !this.platform.is('ios') ? 'close' : null,
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });

    actionSheet.present();
  }
}
