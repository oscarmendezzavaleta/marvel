import { MarvelServiceProvider } from './../../providers/marvel-service/marvel-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  historias: any[] = [];

  constructor(public navCtrl: NavController, public MarvelServiceProvider:MarvelServiceProvider ,public angular:Component) {

  }

  ionViewWillEnter(){
    this.MarvelServiceProvider.getComics()
    .then(data=>{
      this.historias=data.data.results;
      var log = [];
      
      angular.forEach(this.historias, function(value, key) {
        this.push(key + ': ' + value);
      }, log);
      
    })
    .catch(error=>{
      console.error(error);
    })
  }


    



}
