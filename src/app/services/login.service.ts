import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Repository } from '../components/repos-table/repos-table.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private API_ROOT: string = 'https://api.github.com/users/';


  constructor(private httpClient: HttpClient) {
  }

  public getRepositories(username: string): Observable<any[]> {
    // return this.http.get(`${this.API_ROOT}${username}/repos`).toPromise();
    // return await this.http.get(`${this.API_ROOT}${username}/repos`).toPromise();
    return this.httpClient.get<Repository[]>(`${this.API_ROOT}${username}/repos`).pipe(
      map(response => response)
    )
  }
}
