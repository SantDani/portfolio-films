import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public model: { username: string };
  @Output() onShowRepos = new EventEmitter<string>();

  constructor(private loginService: LoginService) {
    this.model = { username: '' };
  }

  ngOnInit(): void {
    this.login({ username: 'santDani' })// TODO.. remove
  }

  public login(form: { username: string }): void {
    this.model = form;
    this.onShowRepos.emit(this.model.username);
  }
}
