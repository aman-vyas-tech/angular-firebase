import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  login(email, password) {
    console.log(email, password);
    this.auth.login(email, password);
  }

  public loginWithGoogle() {
    this.auth.loginWithGoogle();
  }


}
