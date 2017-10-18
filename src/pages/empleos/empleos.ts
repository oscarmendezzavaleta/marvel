import { EverisServiceProvider } from './../../providers/everis-service/everis-service';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EmpleosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-empleos',
  templateUrl: 'empleos.html',
})
export class EmpleosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public EverisServiceProvider: EverisServiceProvider) {
  }

  ionViewDidLoad() {
    this.EverisServiceProvider.getempleos()
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      })
  }
}