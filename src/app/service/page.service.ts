import { Injectable } from '@angular/core';
import { MockFlight } from './MockFlight';
import { Flight } from '../component/flight/Flight';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  flights: Flight[] = []
  constructor() {
    this.flights = MockFlight.mFlight
  }

  getPages():Flight[]{
    return this.flights
  }

  addFlight(f:Flight){
    this.flights.push(f)
  }


}
