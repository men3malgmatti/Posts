import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { TOKEN } from '../../constants';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) { }

  public token = null;
  public logInForm: FormGroup;

  ngOnInit(): void {
    this.token = TOKEN;
    this.logInForm = this.fb.group({
      keepConnection: new FormControl(false),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  onLogin() {

    this.authService.saveToken(this.token)
    this.router.navigate(["/"])
  }

}
