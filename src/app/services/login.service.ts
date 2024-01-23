import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Account } from '../model/account.model';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private service : AccountService,
              private router : Router) { }
  listAccount: Observable<Account[]>;
  username : any;
  errMess: string;
  login(email: string, pass: string){
    this.listAccount = this.service.accountData;
    this.listAccount.subscribe(param=>{
     var a = param.filter(check=>{
      return check.email === email && check.password === pass
     })
      a.map(data=>{
        if(data.email === email && data.password === pass){
          this.username = data.username;
          this.router.navigate(['/home']);
        }else{
          // this.errMess = "Login Failed!";
          this.router.navigate(['/login']);
        }
      })
    })
    
    console.log(email, pass)
  }

  getDataLogin(){
    return this.username;
  }
  // getErrorMess(){
  //   return this.errMess;
  // }

  logOut(){
    return this.username = null;
  }
}
