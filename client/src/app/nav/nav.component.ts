import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_modals/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public accountService: AccountService) {}

  ngOnInit(): void {
  }

  login() {
    console.log(this.model);
    this.accountService.login(this.model).subscribe(
      (response) => {
        // this.isLoggedin = true;
        console.log(response);
      },
      (error) => {
        // this.isLoggedin = false;
        console.log(error);
      }
    );
  }

  logout() {
    this.accountService.logout();
    // this.isLoggedin = false;
  }
  // getCurrentUser() {
  //   this.accountService.currentUser$.subscribe(
  //     (user) => {
  //       this.isLoggedin = !!user;
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
}
