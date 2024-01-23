import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Account } from 'src/app/model/account.model';
import { AccountService } from 'src/app/services/account.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  errorMess: string;
  check : any ;
  constructor(private service: AccountService,
              private auth : LoginService) { }
  

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.minLength(8)])
    });
    
  }

  onSubmit() {
    var email = this.formLogin.value.email;
    var pass = this.formLogin.value.password;
    this.check =  this.auth.login(email,pass);
    // this.errorMess = this.auth.getErrorMess();
    // console.log(this.errorMess);
    // console.log(this.listAccount);
  }

  emailDemo: string;
  passwordDemo: string;

  getAccountDemo(){
    this.emailDemo = 'demo_account@gmail.com'
    this.passwordDemo = '12345678'
    // console.log('Get Account')
  }


}
