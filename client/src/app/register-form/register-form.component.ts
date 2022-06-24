import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { emit } from 'process';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  // @Input() usersFromHomeC: any;
  @Output() cancleRegister = new EventEmitter();

  model: any = {};

  constructor(
    private accountService: AccountService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  register() {
    this.accountService.register(this.model).subscribe(
      (response) => {
        // this.isLoggedin = true;
        console.log(response);
        this.cancle();
      },
      (error) => {
        // this.isLoggedin = false;
        console.log(error);
        this.toastr.error(error.error);
      }
    );
  }
  cancle() {
    this.cancleRegister.emit(false);
  }
}
