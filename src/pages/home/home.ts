import { MarvelServiceProvider } from './../../providers/marvel-service/marvel-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  historias: any[] = [];

  constructor(public navCtrl: NavController, public MarvelServiceProvider:MarvelServiceProvider ) {
    //https://github.com/dreamhouseapp/dreamhouse-mobile-ionic/tree/6bda147afa57cc3e010251ec63b910be4037b5e2
  }

  ionViewWillEnter(){
    this.MarvelServiceProvider.getComics()
    .then(data=>{
      this.historias=data.data.results;
    })
    .catch(error=>{
      console.error(error);
    })
  }


    



}
