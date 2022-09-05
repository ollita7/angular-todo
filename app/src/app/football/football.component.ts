import { Component, OnInit } from '@angular/core';
import { FootballService } from '../services/football.service';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.scss']
})
export class FootballComponent implements OnInit {
  teams = [];

  constructor(private footballService: FootballService) { }

  ngOnInit(): void {
    this.footballService.getTeams(302).subscribe((response)=>{
      console.log(response);
    })
  }

}
