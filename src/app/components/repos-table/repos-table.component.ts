import { Component, Input } from '@angular/core';

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
export class ReposTableComponent {

  @Input() public dataSource: Repository[] = [];
  public displayedColumns: string[];

  constructor() {
    this.displayedColumns = ['position', 'name', 'description', 'language', 'defaultBranch', 'url']
  }
}
