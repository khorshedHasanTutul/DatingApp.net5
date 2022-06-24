import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(
    public accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  login() {
    console.log(this.model);
    this.accountService.login(this.model).subscribe(
      (response) => {
        // this.isLoggedin = true;
        console.log(response);
        this.router.navigateByUrl('/members');
      },
      (error) => {
        // this.isLoggedin = false;
        console.log(error);
        this.toastr.error(error.error);
      }
    );
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
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
