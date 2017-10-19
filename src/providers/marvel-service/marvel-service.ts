import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Md5} from 'ts-md5/dist/md5';


/*
  Generated class for the MarvelServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MarvelServiceProvider {
  
  baseUrl = 'https://gateway.marvel.com:443/v1/'
  comicsUrl = "public/comics"
  publicKey = "610a27f6742ec655e90c26f978e878f5"
  privateKey = "e3238a6515e0b4656c260f7d8ed0fccce7f192f7"
  timeStamp = Date.now()
  hash = Md5.hashStr(this.timeStamp+this.privateKey+this.publicKey)   
  
  

  
  
  
  constructor(public http: Http ) {
    console.log('Hello MarvelServiceProvider Provider');
  }

  
  getComics(){  
    
    return this.http.get(this.baseUrl+this.comicsUrl ,{
params:{ts: this.timeStamp, apikey: this.publicKey, hash: this.hash}
    } )
    .map(res=>res.json())
    .toPromise();   
    
  }


}
