import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { DisplayScreenPage } from '../display-screen/display-screen';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
    
  }

  gotoSettings() {
    this.navCtrl.push('SettingsPage');
  }

  gotoReadCalendarPage()
  {
    this.navCtrl.push('DisplayScreenPage');
  }

}
