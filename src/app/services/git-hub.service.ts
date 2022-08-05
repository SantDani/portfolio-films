import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Repository } from '../components/repos-table/repos-table.component';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  private readonly API_ROOT: string = 'https://api.github.com/users/';

  private onSearchRepositories: BehaviorSubject<string> = new BehaviorSubject('');
  public message = this.onSearchRepositories.asObservable();
  constructor(private httpClient: HttpClient) { }


  public onObserverUsername(username: string): void {
    this.onSearchRepositories.next(username);
  }

  public getRepositories(username: string): Observable<any[]> {
    if (username.length <= 0) {
      console.log('Need a username:', username)
    }
    // return this.http.get(`${this.API_ROOT}${username}/repos`).toPromise(); // deprecated / old
    return this.httpClient.get<Repository[]>(`${this.API_ROOT}${username}/repos`).pipe(
      map(response => response)
    )
  }

}
