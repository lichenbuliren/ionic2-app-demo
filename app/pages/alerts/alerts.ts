import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

/*
  Generated class for the AlertPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/alerts/alerts.html',
})
export class AlertsPage {

  constructor(private navCtrl: NavController,
    private alertCtrl: AlertController) {

  }

  openBaseAlert() {
    let alert = this.alertCtrl.create({
      title: 'Base Alert',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['Cancel', 'OK']
    });

    alert.present();
  }

  openPromptAlert() {
    let prompt = this.alertCtrl.create({
      title: 'Prompt Alert',
      message: 'Enter a name for this new album you\'re so keen on adding',
      inputs: [{
        name: 'name',
        placeholder: 'name'
      }, {
        name: 'password',
        type: 'password',
        placeholder: 'password'
      }],
      buttons: [{
        text: 'Cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },{
        text: 'Save',
        handler: () => {
          console.log('Save clicked');
        }
      }]
    });

    prompt.present();
  }

}
