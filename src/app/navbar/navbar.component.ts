import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'My Gallery';
  user: Observable<firebase.User>;
  active = false; // class for ul and button

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.user = this.authService.authUser();
    console.log('Navbar Loaded');
  }

  logOut() {
    this.authService.logout()
    .then(onResolve => this.router.navigate(['gallery']), onReject =>
  console.log('Rejected'));
  }

  navToggle(e) {
    this.active = !this.active;
    const toggleButton = e.target;

    toggleButton.classList.toggle('active')
  }

}
