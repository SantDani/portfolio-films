import { Component } from '@angular/core';
import { Repository } from './components/repos-table/repos-table.component';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-films';
  public repositories: Repository[] | undefined;
  public showTable: boolean;
  constructor(private loginService: LoginService) {
    this.repositories = []
    this.showTable = false;
  }
  public async getRepos(username: string) {
    this.showTable = false;
    console.log("🚀 ~ file: app.component.ts ~ line 17 ~ AppComponent ~ getRepos ~ username", username)
    this.repositories = await this.loginService.getRepositories(username).toPromise(); // deprecated
    console.log("🚀 ~ file: app.component.ts ~ line 18 ~ AppComponent ~ getRepos ~ result", this.repositories)
    this.showTable = true;
  }
}
