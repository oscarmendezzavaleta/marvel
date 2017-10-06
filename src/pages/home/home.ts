import { MarvelServiceProvider } from './../../providers/marvel-service/marvel-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  historias: any[] = [];

  constructor(public navCtrl: NavController, public MarvelServiceProvider:MarvelServiceProvider) {

  }

  ionViewWillEnter(){
    this.MarvelServiceProvider.getHistory()
    .then(data=>{
      this.historias=data.results;
    })
    .catch(error=>{
      console.error(error);
    })
  }


    



}
