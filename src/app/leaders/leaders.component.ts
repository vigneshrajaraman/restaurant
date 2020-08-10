import { Component, OnInit } from '@angular/core';
import { LeaderService } from '../service/leader.service';

@Component({
  selector: 'app-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.css']
})
export class LeadersComponent implements OnInit {

  constructor(private leaderService: LeaderService) { }
  leaders;
  ngOnInit(): void {
    this.leaders = this.leaderService.getAllLeaders();
  }

}
