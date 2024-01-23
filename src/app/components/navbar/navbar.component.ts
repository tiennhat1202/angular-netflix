import { Component, HostListener, OnInit } from '@angular/core';
import { faSearch, faHeart, faPlay, faInfoCircle, faCirclePlay, faPlusCircle, faCircleInfo, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private login: LoginService) { }
  faPlay = faPlay;
  faInfoCircle = faInfoCircle;
  faSearch = faSearch;
  faHeart = faHeart;
  faArrowRightFromBracket = faArrowRightFromBracket;

  ngOnInit(): void {
    this.dataLogin()
  }
  @HostListener("document:scroll")
  scrollfuntion() {
    const scroll = document.querySelector('.navbar');
    if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
      scroll?.classList.add('navbar_scroll')
    } else {
      scroll?.classList.remove('navbar_scroll')
    }

    // const scrolldetail = document.querySelector('.nav-content');

    // if(document.body.scrollTop >20 || document.documentElement.scrollTop >20) {
    //   scrolldetail?.classList.add('d-none')
    // }else{
    //   scrolldetail?.classList.remove('d-none')
    // }
  }
  username: any;

  dataLogin() {
    this.username = this.login.getDataLogin();
    // console.log(this.username);
  }

  logOut() {
    this.username = this.login.logOut();
  }

}
