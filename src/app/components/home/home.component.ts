import { Component, HostListener, OnInit } from '@angular/core';
import { faSearch, faHeart, faPlay, faInfoCircle, faCirclePlay, faPlusCircle, faCircleInfo, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private login: LoginService) { }
  faSearch = faSearch;
  faHeart = faHeart;
  faPlay = faPlay;
  faInfoCircle = faInfoCircle;
  faCirclePlay = faCirclePlay;
  faPlusCircle = faPlusCircle;
  faCircleInfo = faCircleInfo;
  faArrowRightFromBracket = faArrowRightFromBracket;



  srcImg = "https://image.tmdb.org/t/p/w500"


  topTrending: any;
  topRatedMovie: any;


  ngOnInit(): void {
    this.dataLogin();
    this.getTrending('https://api.themoviedb.org/3/trending/all/day?api_key=93badcce09181c4bb6e8b0a956b1cf1f')
    this.getTopRated('https://api.themoviedb.org/3/movie/top_rated?api_key=93badcce09181c4bb6e8b0a956b1cf1f&language=en-US&page=1')
  }


  @HostListener("document:scroll")
  scrollfuntion() {
    const scroll = document.querySelector('.navbar')
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      scroll?.classList.add('navbar_scroll')
    } else {
      scroll?.classList.remove('navbar_scroll')
    }
  }

  ngAfterViewInit() {
    const videoEl = document.querySelector('video');
    if (videoEl) {
      videoEl.muted = true;
    }
  }

  getTrending(API_URL: string) {
    fetch(API_URL).then(res => res.json()).then(data =>
      this.topTrending = data.results
    )
  }
  getTopRated(API_KEY: string) {
    fetch(API_KEY).then(res => res.json()).then(data =>
      this.topRatedMovie = data.results

    )
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
