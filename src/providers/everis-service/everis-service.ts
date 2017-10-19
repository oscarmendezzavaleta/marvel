import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the EverisServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EverisServiceProvider {

  baseUrl: string; 
  servicename: 'jobRequisitions'


  constructor(public http: Http) {
    console.log('Hello EverisServiceProvider Provider');
  }

  getempleos() {
    this.baseUrl = 'https://everis.csod.com/Services/api/public/ATS/CareerSite/1/jobRequisitions?corp=everis&keyword=&page=1&pageSize=1000';

    return this.http.get(this.baseUrl)
      .map(res =>
        res.json()).toPromise();

  }

}
