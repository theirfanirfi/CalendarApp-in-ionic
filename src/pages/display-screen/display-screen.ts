import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Calendar } from '@ionic-native/calendar';
import {Storage} from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-display-screen',
  templateUrl: 'display-screen.html',
})
export class DisplayScreenPage {
  calendars = [];
  fincal = 'myname is irfan';
  events = [];
  input1 : any;
  input2 : any;
  input3 : any;
  input4 : any;
  input5 : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private cal: Calendar, private plt: Platform, 
    private toast: ToastController, private storage: Storage) {
      
    this.plt.ready().then(()=>{
      let start = new Date();
      start.setDate(start.getDate() - 300);
      let end = new Date();
      end.setDate(end.getDate() + 300);
      this.storage.get("input1").then((val) => { if(val != null) {this.input1 = val;} else {this.input1 = '8xbxvczxj'; } } );
      this.storage.get("input2").then((val) => { if(val != null) {this.input2 = val;} else {this.input2 = '98678hfksdc'; } } );
      this.storage.get("input3").then((val) => { if(val != null) {this.input3 = val;} else {this.input3 = '009sagdjq3g'; } } );
      this.storage.get("input4").then((val) => { if(val != null) {this.input4 = val;} else {this.input4 = '86fskdah098'; } } );
      this.storage.get("input5").then((val) => { if(val != null) {this.input5 = val;} else {this.input5 = 'fsd2374jhf'; } } );

      this.storage.length().then((res) => {
        if(res > 0)
        {
         
          this.cal.listEventsInRange(start, end).then(data => {
            for(let d of data){
              if(d.title == this.input1 || d.title == this.input2 || d.title == this.input3 || d.title == this.input4 || d.title == this.input5)
              {
                this.events.push(d);
              }
            }
            // this.toast.create({
            //   message: JSON.stringify(this.events),
            //   duration: 56000
            // }).present();
          });

        }
      });
    });
     //this.create();
     

    
  }

  ionViewDidLoad() {
    //this.fetch();
    
   // this.create();
    console.log('ionViewDidLoad DisplayScreenPage');
  }

  goBackToSetting()
  {
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot();
  }

  create()
  {
    let date = new Date();
    this.cal.createEvent('My New Event from ionic','Pakistan','My Ionic Notes',date,date).then(res => {
      //console.log('success', res);
      this.toast.create({
        message: "Event Created",
        duration: 3000
      }).present();
    }, err => {
     // console.log('error: ',err);
     this.toast.create({
      message: "Event is not created",
      duration:3000
     }).present();
    }
  
  );
  }

  fetch()
  {
    this.cal.findAllEventsInNamedCalendar('mycal')
    this.cal.findEvent('My New Event from ionic').then(data => {
      this.fincal = data;
     }, err => {
       this.toast.create({
        message: "error: "+err,
        duration: 3000
       }).present();
     });
  }

}
