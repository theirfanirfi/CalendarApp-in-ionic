import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import {Storage} from '@ionic/storage';
import { DisplayScreenPage } from '../display-screen/display-screen';
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  d = new Date();
  input1:any;
  input2:any;
  input3:any;
  input4:any;
  input5:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private toast: ToastController) {
    this.storage.length().then(res => {
      if(res > 0 )
      {
        //input one
        this.storage.get("input1").then((val) => {
          if(val != null)
          {
            this.input1 = val;
          }
          else
          {
            this.input1 = '';
          }
        });

        //input two
        this.storage.get("input2").then((val) => {
          if(val != null)
          {
            this.input2 = val;
          }
          else
          {
            this.input2 = '';
          }
        });

        //input three

        this.storage.get("input3").then((val) => {
          if(val != null)
          {
            this.input3 = val;
          }
          else
          {
            this.input3 = '';
          }
        });

        //input four

        this.storage.get("input4").then((val) => {
          if(val != null)
          {
            this.input4 = val;
          }
          else
          {
            this.input4 = '';
          }
        });

      //input 5

      this.storage.get("input5").then((val) => {
        if(val != null)
        {
          this.input5 = val;
        }
        else
        {
          this.input5 = '';
        }
      });

      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  goBackToHome()
  {
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot();
    //this.navCtrl.
  }

  saveInputs()
  {
    this.storage.length().then(res => {
      if(res > 0)
      {
        this.storage.clear().then(res =>{
          this.toast.create({
            message: 'All Previous Values cleared',
            duration: 3000
           }).present();
        });
      }
    });
    
    this.storage.set('input1',this.input1);
    this.storage.set('input2',this.input2);
    this.storage.set('input3',this.input3);
    this.storage.set('input4',this.input4);
    this.storage.set('input5',this.input5);
   this.toast.create({
    message: 'Strings Saved',
    duration: 3000
   }).present(); 

   this.navCtrl.push('DisplayScreenPage');
  }

}
