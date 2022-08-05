import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

export interface Repository {
  num: number;
  name: string;
  description: string;
  language: string;
  defaultBranch: string;
  gitURL: string;
}


@Component({
  selector: 'app-repos-table',
  templateUrl: './repos-table.component.html',
  styleUrls: ['./repos-table.component.scss']
})
export class ReposTableComponent implements OnInit {

  @Input() public dataSource: Repository[] = [];
  public displayedColumns: string[];

  constructor(private loginService: LoginService) {
    //  this.loginService.getAPI().subscribe
    // this.repositories = this.loginService.getRepositories();
    // console.log("🚀 ~ file: repos-table.component.ts ~ line 26 ~ ReposTableComponent ~ constructor ~ repositories", repositories)
    this.displayedColumns = ['position', 'Name', 'Description', 'Language', 'DefualtBranch', 'URL']
    // this.repositories.push({ num: 1, name: '1', description: '1', language: 'lang', defaultBranch: 'defaultBranch', gitURL: 'gitURL' })
  }

  ngOnInit(): void {

  }



}
