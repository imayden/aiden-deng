import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.scss'
})
export class HeaderBarComponent implements OnInit, OnDestroy {
  today: Date = new Date();
  yearOfExperience?: number;
  private intervalId: any;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void { 
    this.yearOfExperience = this.sharedService.setYearOfExperience();
    this.updateTime();
    this.intervalId = setInterval(
      () => {
        this.updateTime();
      }, 1000
    );
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
