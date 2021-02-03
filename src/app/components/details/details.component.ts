import { Component, Input, OnInit         } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Actors, MovieDetails             } from 'src/app/interfaces';
import { LocalDataService                 } from 'src/app/services/local-data.service';
import { MoviesService                    } from 'src/app/services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor( 
    private movieservice: MoviesService,
    private modalCtrl: ModalController,
    private localData: LocalDataService,
    public toastController: ToastController
      ) { }
  async ngOnInit() {
    this.movieservice.getDetails(this.id)
      .then( res => this.details = res );

    this.movieservice.getActors(this.id)
      .then( res => this.actors = res );

      this.isFavorite = await this.localData.isFavorite(Number(this.id))
  }

  @Input() id: string = "";
  details: MovieDetails;
  actors: Actors;
  showText: number = 150;
  isFavorite: boolean;

  slideOpts = {
    slidesPerView: '3.3',
    spaceBetween: -10,
    freeMode: true
  }

  readMore = () => this.showText = this.details.overview.length;

  back = () => this.modalCtrl.dismiss();

  toggleFav = () => {
    if (this.isFavorite) {
      this.localData.deleteMovie(this.details)
      this.presentToast('Removed from favorites')
    } else {
      this.localData.saveMovie(this.details);
      this.presentToast('Added to favorites')
    }
    this.isFavorite = !this.isFavorite;
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message, 
      duration: 1250,
      position:'bottom',
      color: 'primary',
      cssClass:'customToastClass'
    });
    toast.present();
  }


}
