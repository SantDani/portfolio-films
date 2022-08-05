import { Component, OnInit } from '@angular/core';
import { GitHubService } from 'src/app/services/git-hub.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public model: { username: string };
  constructor(private gitHubService: GitHubService) {
    this.model = { username: 'santDani' }; // TODO.. remove
  }

  ngOnInit(): void {
  }

  public onSubmit(value: { username: string }) {
    this.gitHubService.onObserverUsername(value.username);
  }

}
