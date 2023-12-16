import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ranking } from 'src/app/models/ranking';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RankingService {
  private rankingsApi = environment.rankingsApi;

  constructor(private http: HttpClient) {}

  getAllRankings(): Observable<Ranking[]> {
    return this.http.get<Ranking[]>(`${this.rankingsApi}`);
  }

  getRankingsForCompetition(competitionId: number): Observable<Ranking[]> {
    return this.http.get<Ranking[]>(`${this.rankingsApi}/rankings/${competitionId}`);
  }

  getTopRankingsForCompetition(competitionId: number): Observable<Ranking[]> {
    const url = `${this.rankingsApi}/rankings/competition/${competitionId}`;
    return this.http.get<Ranking[]>(url);
  }
}
