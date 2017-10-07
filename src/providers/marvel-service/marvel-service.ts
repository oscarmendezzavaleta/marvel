import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the MarvelServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MarvelServiceProvider {
  URLCOMICS = "https://gateway.marvel.com:443/v1/public/comics?apikey=d7fc5b7e9e14e4abf0e81a04dfc18e9d&hash=b64df3dbffec30b5a2fb7b15511af172&ts=1";
  URLSTORIRES = "https://gateway.marvel.com:443/v1/public/comics/apikey=d7fc5b7e9e14e4abf0e81a04dfc18e9d&hash=b64df3dbffec30b5a2fb7b15511af172&ts=1";
  constructor(public http: Http) {
    console.log('Hello MarvelServiceProvider Provider');
  }

  getHistory(){
    return this.http.get(this.URLCOMICS)
    .map(res=>res.json())
    .toPromise();   
  }


}
