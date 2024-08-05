import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent implements OnInit, OnDestroy {
  private intervalId: any;
  yearOfExperience: number = 0;
  today: Date = new Date();
  currentTime: string = '';
  currentSeconds: string = '';
  currentDate: string = '';
  currentDay: string = '';
  timeZone: string = ''; // Default time zone
  timezoneName: string = '';
  selectedTimezone: 'EST' | 'CST' | 'PST' | 'MST'  = 'CST';


  constructor(private sharedService: SharedService) { }

  ngOnInit(): void { 
    this.setTimezone(this.selectedTimezone);
    this.updateTime();
    this.intervalId = setInterval(
      () => {
        this.updateTime();
      }, 1000
    );
    this.yearOfExperience = this.sharedService.setYearOfExperience();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

  }

  setTimezone(zone: 'EST' | 'CST' | 'PST' | 'MST') {
    if (zone === 'EST') {
      this.timeZone = 'America/New_York';
      this.timezoneName = 'EST';
    } else if (zone === 'CST') {
      this.timeZone = 'America/Chicago';
      this.timezoneName = 'CST';
    } else if (zone === 'PST') {
      this.timeZone = 'America/Los_Angeles';
      this.timezoneName = 'PST';
    } else if (zone === 'MST') {
      this.timeZone = 'America/Denver';
      this.timezoneName = 'MST';
    }
  }


  updateTime() {
    this.today = new Date();
    
    const now = moment.default().tz(this.timeZone);
    this.currentDay = now.format('A'); // AM or PM
    this.currentDate = now.format('MMM D, YYYY'); // Aug 5, 2024
    this.currentTime = now.format('h:mm'); // 1:30
    this.currentSeconds = now.format('ss'); // 30
    this.timezoneName = now.format('z');
  }

}
