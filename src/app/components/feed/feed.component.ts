import { Component, OnInit } from '@angular/core';
import { HeaderBarComponent } from '../header-bar/header-bar.component';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent implements OnInit{

  yearOfExperience: number = 0;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
      this.yearOfExperience = this.sharedService.setYearOfExperience();
  }

}
