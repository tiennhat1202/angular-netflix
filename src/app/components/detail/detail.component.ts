import { Component, HostListener, OnInit } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  routeSub: Subscription;
  key_API = '93badcce09181c4bb6e8b0a956b1cf1f'
  movieDetail;
  movieDirector;
  movieGenres;
  movieCasts;
  backDrop_path;
  urlSrc = 'https://image.tmdb.org/t/p/w500'
  // slideConfig = { slidesToShow: 6, slidesToScroll: 6 };

  constructor(private route: ActivatedRoute) { }
  loading: boolean = false;
  faPlay = faPlay;
  faYoutube = faYoutube;

  ngOnInit(): void {
    setTimeout(()=> this.loading=true,1000)
    this.routeSub = this.route.params.subscribe((params) => {
      this.getMovieDetail(params['id']);
      this.getMovieDirector(params['id']);
      this.getMovieGenres(params['id']);
      this.getMovieCast(params['id'])
    })
  }

  getMovieDetail(id: number) {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.key_API}&language=en-US&append_to_response=credits`)
      .then(res => res.json())
      .then(data => {this.movieDetail = data })
  }

  getMovieDirector(id: number) {
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.key_API}`)
      .then(response => response.json())
      .then((jsonData) => jsonData.crew.filter(({job}) => job === 'Director'))
      // .then( data => data.json())
      // .then(data => console.log(data))
      .then( data => this.movieDirector = data[0])
  }
  getMovieGenres(id : number){
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.key_API}&language=en-US&append_to_response=credits`)
    .then(res => res.json())
    .then((jsonData) => jsonData.genres.map(obj => obj.name))
      // .then( data => data.json())
      .then(data => this.movieGenres = data)
  }
  getMovieCast(id : number){
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.key_API}`)
      .then(res => res.json())
      .then((jsonData) => jsonData.cast)
      .then (data => this.movieCasts = data)
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
