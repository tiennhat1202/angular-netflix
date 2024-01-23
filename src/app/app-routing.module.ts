import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './components/person/person.component';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MoviesComponent } from './components/movies/movies.component';
import { DirectorComponent } from './components/director/director.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", redirectTo: '' },
  { path: "home/movies", redirectTo: '/movies' },
  { path: "movies", component: MoviesComponent },
  { path: "movies/home", redirectTo: '' },
  { path: "movie/:id", component: DetailComponent },
  { path: "movie/:id/home", redirectTo: '' },
  { path: "movie/:id/movies", redirectTo: '/movies' },
  { path: "login", component: LoginComponent },
  { path: "person/:id", component: PersonComponent },
  { path: "person/:id/home", redirectTo: '' },
  { path: "person/:id/movies", redirectTo: '/movies' },
  { path: "person/:id/login", redirectTo: '/login' },
  { path: "director/:id", component: DirectorComponent },
  { path: "director/:id/home", redirectTo: '' },
  { path: "director/:id/movies", redirectTo: '/movies' },
  { path: "director/:id/login", redirectTo: '/login' },
  { path: "movies/movie/:id", redirectTo: '/movie/:id' },
  { path: "movie/:id/login", redirectTo: '/login' },
  { path: "movies/login", redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
