import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor( private movieService: MoviesService) {}
  ngOnInit() { 
    this.movieService.getFeature()
      .then( res => this.recentMovies.push( ...res.results ) );

    this.getPopular(this.popTop);
    this.getPopular(this.popBottom);
  }

  recentMovies: Movie[] = [];
  popTop: Movie[] = [];
  popBottom: Movie[] = [];

  sendPopTop = () => this.getPopular(this.popTop);
  sendPopBottom = () => this.getPopular(this.popBottom);


  private getPopular = async (arr: Movie[]) => {
    await this.movieService.getPopular()
      .then( res => arr.push( ...res.results ) );
  }

}
