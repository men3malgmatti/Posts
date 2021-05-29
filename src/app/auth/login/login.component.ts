import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { TOKEN } from '../../constants';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  public token = null

  ngOnInit(): void {
    this.token = TOKEN
  }

  onLogin() {

    this.authService.saveToken(this.token)
    this.router.navigate(["/"])
  }

}
