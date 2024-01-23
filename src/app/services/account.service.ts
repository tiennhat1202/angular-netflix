import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../model/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {  }

  get accountData(): Observable<Account[]>{
    return this.http.get<Account[]>('../../../assets/data/account.json');
  } 
}
