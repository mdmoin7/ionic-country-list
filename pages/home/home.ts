import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {data} from './mock-data';
import * as _ from 'lodash';
import {FilterPipe} from './filter.pipe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[FilterPipe]
})
export class HomePage {
  grouped:any;
  constructor(private filterPipe:FilterPipe) {
    this.groupData(data['countriesList']);
  }

  groupData(data){
    this.grouped=_.groupBy(data, 'countryName[0]');
  }

  filterList(search){
    const d=this.filterPipe.transform(data['countriesList'],search,['countryName','countryCode']);
    this.groupData(d);
  }
}
