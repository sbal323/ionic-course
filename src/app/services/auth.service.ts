import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private _isAuthenticated = true;

  constructor(private router: Router) {}

  public get isAuthenticated() {
    return this._isAuthenticated;
  }

  login() {
    this._isAuthenticated = true;
  }
  logout() {
    this._isAuthenticated = false;
    this.router.navigateByUrl("/auth");
  }
}
