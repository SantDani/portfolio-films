import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Repository } from '../components/repos-table/repos-table.component';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public repositories: Repository[];
  public showTable: boolean;
  constructor(private loginService: LoginService) {
    this.repositories = []
    this.showTable = false;
  }
  ngOnInit(): void {

  }

  public async getRepos(username: string) {
    this.showTable = false;
    try {
      // this.repositories = await this.loginService.getRepositories(username).toPromise(); // deprecated
      // The suffix $ is used to indicate that variable is an Observable
      const result$ = this.loginService.getRepositories(username);
      this.repositories = await lastValueFrom(result$);
    } catch (error) {
      console.error(error)
    }
    if (this.repositories.length > 0)
      this.showTable = true;
  }

}
