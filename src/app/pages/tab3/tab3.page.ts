import { Component, OnInit } from '@angular/core';
import { Genre, MovieDetails } from 'src/app/interfaces';
import { LocalDataService } from 'src/app/services/local-data.service';
import { MoviesService } from '../../services/movies.service';
import { DetailsComponent } from '../../components/details/details.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  constructor(
    private localdata:LocalDataService,
    private moviesService: MoviesService
  ) { }
  ngOnInit() {  }
  
  movies: DetailsComponent[];
  genres: Genre[];

  ionViewWillEnter() {

    this.localdata.getFavorites()
      .then( res => this.movies = res );

    this.moviesService.getGenres()
      .then( res => this.genres = res.genres );
  }

}
