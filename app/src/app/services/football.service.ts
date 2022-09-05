import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  apiKey = 'bbae7ec9d734bfe55e21f283edd47e86bfeb83970eda6f2b9259f958470eb7c6';
  url = 'https://apiv3.apifootball.com/';

  constructor(private http: HttpClient) { }

  getTeams(league: number) {
    return this.http.get(`${this.url}/?action=get_teams&league_id=${league}&APIkey=${this.apiKey}`)
  }
}
