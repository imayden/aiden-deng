import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private yearOfExperience: number = 0;
  today: Date = new Date();

  setYearOfExperience() {
    this.yearOfExperience = this.today.getFullYear() - 2018;
    console.log(this.today);
    console.log(this.yearOfExperience);
    return this.yearOfExperience;
  }


  constructor() { }
}
