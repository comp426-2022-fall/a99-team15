import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  firstName = "Bob";
  lastName = "Builder";
  username = "Bob";
  password = "password123";
  email = "bob@gmail.com";
  accuracy = "";

  constructor(
    private router: Router
  ) {

  };
  homeRedirect() {
    this.router.navigateByUrl('/home-page');
  }
  gameRedirect() {
    this.router.navigateByUrl('/game');
  };
  loginRedirect() {
    this.router.navigateByUrl('/login');
  };
  leaderboardRedirect() {
    this.router.navigateByUrl('/leaderboard');
  };

}
