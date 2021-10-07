import { Observable } from 'rxjs';
import { AuthService, AuthResponseData } from './auth-service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{
  isLoggedIn = true;
  isLoading = false;
  error: string = "";
  @Output() sendEvent = new EventEmitter();
  constructor(private authService: AuthService , private router:Router) { }

  ngOnInit(): void {
  }
  

  onSwitch() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  onSubmit(f: NgForm) {
    this.isLoading = true;
    if (!f.valid) {
      return;
    }
    let authObs: Observable<AuthResponseData>
    if (this.isLoggedIn) {
      authObs = this.authService.signIn(f.value.email, f.value.password)
    } else {
      authObs = this.authService.signUp(f.value.email, f.value.password)
    }
    authObs.subscribe(
      (res) => {
        this.isLoading = false;
        this.router.navigate(['/recipe'])
      },
      (errorMessage) => {
        this.isLoading = false;
        this.error = errorMessage;
      }
    )

    f.reset()
  }

  close(data: string) {
    this.error = data;
  }

  onGoogleSignin(){
    
  }

}
