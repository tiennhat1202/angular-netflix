import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { faSearch, faHeart, faPlay, faInfoCircle, faCirclePlay, faPlusCircle, faCircleInfo } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  routeSub: Subscription;
  infoPerson;
  infoPersonGender;
  moreMovieOfPerson;
  urlSrc = 'https://image.tmdb.org/t/p/w500'
  faSearch = faSearch;
  faHeart = faHeart;
  faPlay = faPlay;
  faInfoCircle = faInfoCircle;
  faCirclePlay = faCirclePlay;
  faPlusCircle = faPlusCircle;
  faCircleInfo = faCircleInfo;
  loading: boolean=false;


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    setTimeout(()=> this.loading=true,1000)
    this.routeSub = this.route.params.subscribe((params) => {
      this.getInfoPerson(params['id']);
      this.getMoreMovieOfPerson(params['id']);
    })
  }

  getInfoPerson(id: number) {
    fetch(`https://api.themoviedb.org/3/person/${id}?api_key=93badcce09181c4bb6e8b0a956b1cf1f&append_to_response=combined_credits`)
    .then(res => res.json())
    .then(data => this.infoPerson = data)
  }

  getMoreMovieOfPerson(id: number){
    fetch(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=93badcce09181c4bb6e8b0a956b1cf1f&language=en-US`)
    .then(res => res.json())
    .then(data => data.cast)
    .then(data => this.moreMovieOfPerson  = data)
    
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
