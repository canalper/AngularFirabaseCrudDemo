
import { UserProfileComponent } from './../user-profile/user-profile.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../_services/user.service';
import { DocumentChangeAction } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  error = '';
  users;

  get f() { return this.loginForm.controls; }

  constructor(private userService: UserService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    if (this.userService.isLoggedIn)
    {
      this.router.navigate(['dashboard']);
    }

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {

    if (this.loginForm.invalid) {
      return;
  }
  this.userService
      .login(this.f.username.value, this.f.password.value)
      .then(data => {
          this.router.navigate(['dashboard']);
      }).catch((error) => {
        window.alert(error)
      });
      }
    }
