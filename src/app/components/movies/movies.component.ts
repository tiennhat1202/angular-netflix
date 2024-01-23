import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { faCirclePlay, faPlusCircle, faCircleInfo, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor() { }
  faCirclePlay = faCirclePlay;
  faPlusCircle = faPlusCircle;
  faCircleInfo = faCircleInfo;
  faHeart = faHeart;

  srcImg = "https://image.tmdb.org/t/p/w500"
  mostPopularMovie: any;
  highestRatedMovie: any;
  upComingMovie: any;
  check:boolean=true;
  listSearch;
  loading: boolean=false;

  ngOnInit(): void {
    setTimeout(()=> this.loading=true,1000)
    this.getMostPopularMovie('https://api.themoviedb.org/3/movie/popular?api_key=93badcce09181c4bb6e8b0a956b1cf1f&language=en-US&page=1')
    this.getHighestRatedMovie('https://api.themoviedb.org/3/movie/top_rated?api_key=93badcce09181c4bb6e8b0a956b1cf1f&language=en-US&page=1')
    this.getUpcomeingMovie('https://api.themoviedb.org/3/movie/upcoming?api_key=93badcce09181c4bb6e8b0a956b1cf1f&language=en-US&page=1')
  }

  getUpcomeingMovie(API_URL: string){
    fetch(API_URL).then(res => res.json())
    .then(data => this.upComingMovie = data.results)
  }

  getMostPopularMovie(API_URL: string) {
    fetch(API_URL).then(res => res.json())
    .then(data => this.mostPopularMovie = data.results)
  }
  getHighestRatedMovie(API_KEY: string) {
    fetch(API_KEY).then(res => res.json())
    .then(data => this.highestRatedMovie = data.results)
  }

  getMovieSearch(key: string){
    const keyword = key.replace(/ /g, '+');
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=93badcce09181c4bb6e8b0a956b1cf1f&query=${keyword}`)
    .then(res => res.json())
    .then(data => {
      let index : number[] = [];
      this.listSearch = data.results;
      // for (let i = 0; i < this.listSearch.length; i++) {
      //   if(this.listSearch[i].media_type === "person"){
      //     index.push(i);
      //   }
      // }
      for (let i = index.length-1; i>= 0; i--){
        this.listSearch.splice(index[i], 1);
      }
      if(this.listSearch.length == 0 ||  !this.listSearch){
        this.check = true;
      }
      else{
        this.check = false;
      }
    })
  }

}
