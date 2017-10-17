import { Comic } from './../../model/comis';
import { ListPage } from './../list/list';

import { MarvelServiceProvider } from './../../providers/marvel-service/marvel-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  historias: any[] = [];
  comic: Comic;
  
  constructor(public navCtrl: NavController, public MarvelServiceProvider: MarvelServiceProvider) {
    //https://github.com/dreamhouseapp/dreamhouse-mobile-ionic/tree/6bda147afa57cc3e010251ec63b910be4037b5e2
  }

  ionViewWillEnter() {
    this.MarvelServiceProvider.getComics()
      .then(data => {
        ///this.historias=data.data.results;
        for (let item of data.data.results) {
          this.comic = new Comic();
          this.comic.title = item.title;
          this.comic.type = item.format;
          this.comic.imgen = item.thumbnail.path + '.' + item.thumbnail.extension;
          this.comic.fecha = item.modified;
          this.comic.stories = item.stories;
          this.historias.push(this.comic);
        }
        //this.comic.title = #;



      })
      .catch(error => {
        console.error(error);
      })
  }

  viewDetail(stories: any) {
    console.log(stories)
    this.navCtrl.push(ListPage, { stories: stories });
  }

}

