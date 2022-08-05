import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { lastValueFrom, Subscription } from 'rxjs';
import { GitHubService } from 'src/app/services/git-hub.service';

export interface Repository {
  num: number;
  name: string;
  description: string;
  language: string;
  default_branch: string;
  gitURL: string;
}
@Component({
  selector: 'app-repos-table',
  templateUrl: './repos-table.component.html',
  styleUrls: ['./repos-table.component.scss']
})
export class ReposTableComponent implements OnInit, OnDestroy {

  @Input() public dataSource: Repository[] = [];
  public displayedColumns: string[];
  private onObserverSearchRepositories: Subscription;

  public showTable: boolean;

  constructor(private gitHubService: GitHubService) {
    this.onObserverSearchRepositories = Subscription.EMPTY;
    this.showTable = false;
    this.displayedColumns = ['position', 'name', 'description', 'language', 'defaultBranch', 'url']
  }

  ngOnInit(): void {
    this.onObserverSearchRepositories = this.gitHubService.message.subscribe(async username => {
      // console.log("🚀 ~ file: repos-table.component.ts result", result)
      //TODO.. call API

      await this.getRepos(username);
    })
  }

  public async getRepos(username: string) {
    this.showTable = false;
    try {
      const result$ = this.gitHubService.getRepositories(username);
      this.dataSource = await lastValueFrom(result$);
    } catch (error) {
      console.error(error)
    }
    if (this.dataSource.length > 0)
      this.showTable = true;
  }

  ngOnDestroy(): void {
    this.onObserverSearchRepositories.unsubscribe();
  }


}
