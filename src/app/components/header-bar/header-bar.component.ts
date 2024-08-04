import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.scss'
})
export class HeaderBarComponent implements OnInit, OnDestroy {
  today: Date = new Date();
  yearOfExperience: number = this.today.getFullYear() - 2018;
  private intervalId: any;

  constructor() { }

  ngOnInit(): void { 
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
