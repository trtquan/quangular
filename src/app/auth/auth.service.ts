import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private myRoute: Router) { }
  sendToken(token: string) {
    token ? localStorage.setItem('LoggedInUser', token) : localStorage.removeItem('LoggedInUser');
  }
  getToken() {
    return localStorage.getItem('LoggedInUser');
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem('LoggedInUser');
    this.myRoute.navigate(['Login']);
  }
}
