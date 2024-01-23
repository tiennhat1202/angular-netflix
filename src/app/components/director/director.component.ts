import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faSearch, faHeart, faPlay, faInfoCircle, faCirclePlay, faPlusCircle, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.scss']
})
export class DirectorComponent implements OnInit {
  routeSub: Subscription;

  urlSrc = 'https://image.tmdb.org/t/p/w500'
  faSearch = faSearch;
  faHeart = faHeart;
  faPlay = faPlay;
  faInfoCircle = faInfoCircle;
  faCirclePlay = faCirclePlay;
  faPlusCircle = faPlusCircle;
  faCircleInfo = faCircleInfo;

  moreMovieOfDirector;
  infoDirector;
  loading:boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    setTimeout(()=> this.loading=true,1000)
    this.routeSub = this.route.params.subscribe((params) => {
      this.getInfoDirector(params['id']);
      // this.getMoreMovieOfDirector(params['id']);
    })
  }

  getInfoDirector(id : number){
    fetch(`https://api.themoviedb.org/3/person/${id}?api_key=93badcce09181c4bb6e8b0a956b1cf1f&append_to_response=combined_credits`)
    .then(res => res.json())
    .then(data => this.infoDirector = data)
  }

  // getMoreMovieOfDirector(id: number){
  //   fetch(`https://api.themoviedb.org/3/person/${id}?api_key=93badcce09181c4bb6e8b0a956b1cf1f&append_to_response=combined_credits`)
  //   .then(res => res.json())
  //   .then(data => data.also_known_as)
  //   .then(data => console.log(data))
  //   .then(data => this.moreMovieOfDirector = data)
  // }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
