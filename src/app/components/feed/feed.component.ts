import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderBarComponent } from '../header-bar/header-bar.component';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent implements OnInit, OnDestroy {
  private intervalId: any;
  yearOfExperience: number = 0;
  today: Date = new Date();

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void { 
    
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

  updateTime() {
    this.today = new Date();
  }

}
