import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Actors, MovieDetails     } from 'src/app/interfaces';
import { MoviesService            } from 'src/app/services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor( 
    private movieservice: MoviesService,
    private modalCtrl: ModalController
      ) { }
  ngOnInit() {
    this.movieservice.getDetails(this.id)
      .then( res => this.details = res );

    this.movieservice.getActors(this.id)
      .then( res => this.actors = res );
  }

  @Input() id: string = "";
  details: MovieDetails;
  actors: Actors;
  showText: number = 150;

  slideOpts = {
    slidesPerView: '3.3',
    spaceBetween: -10,
    freeMode: true
  }

  readMore = () => this.showText = this.details.overview.length;

  back = () => this.modalCtrl.dismiss();


}
