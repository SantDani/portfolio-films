import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Repository } from './components/repos-table/repos-table.component';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-films';
  public repositories: Repository[];
  public showTable: boolean;
  constructor(private loginService: LoginService) {
    this.repositories = []
    this.showTable = false;
  }
  public async getRepos(username: string) {
    this.showTable = false;
    console.log("🚀 ~ file: app.component.ts ~ line 17 ~ AppComponent ~ getRepos ~ username", username)
    // this.repositories = await this.loginService.getRepositories(username).toPromise(); // deprecated

    // The suffix $ is used to indicate that variable is an Observable
    const result$ = this.loginService.getRepositories(username);
    this.repositories = await lastValueFrom(result$);

    console.log("🚀 ~ file: app.component.ts ~ line 18 ~ AppComponent ~ getRepos ~ result", this.repositories)
    if (this.repositories.length > 0)
      this.showTable = true;

  }
}
