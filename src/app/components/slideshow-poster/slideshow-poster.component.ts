import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/app/interfaces';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {
  constructor(private modalCtrl: ModalController) { }
  ngOnInit() {}
  
  @Input() movies: Movie[] = [];
  slideOpts = {
    slidesPerView: '3.3',
    spaceBetween: -10,
    freeMode: true
  }

  showDetails = async (id: string) => {
    const modal = await this.modalCtrl.create({
      component: DetailsComponent,
      componentProps: { id }
    });

    modal.present();
  }
}
