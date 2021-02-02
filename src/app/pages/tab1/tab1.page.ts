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
      .then( res => this.recentMovies = res.results);
  }

  recentMovies: Movie[] = [];

  slideOpts = {
    slidesPerView: 1.2,
    freeMode: true
  }



}
