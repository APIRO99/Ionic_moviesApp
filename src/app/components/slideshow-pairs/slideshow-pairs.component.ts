import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/app/interfaces';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-slideshow-pairs',
  templateUrl: './slideshow-pairs.component.html',
  styleUrls: ['./slideshow-pairs.component.scss'],
})
export class SlideshowPairsComponent implements OnInit {
  constructor(private modalCtrl: ModalController) { }
  ngOnInit() {  }

  @Input() popTop: Movie[] = [];
  @Input() popBottom: Movie[] = [];
  @Output() requestPopTop = new EventEmitter();
  @Output() requestPopBottom = new EventEmitter();

  slideOpts = {
    slidesPerView: '3.3',
    spaceBetween: -10,
    freeMode: true
  }

  emitTop = () => this.requestPopTop.emit();
  emitBottom = () => this.requestPopBottom.emit();

  showDetails = async (id: string) => {
    const modal = await this.modalCtrl.create({
      component: DetailsComponent,
      componentProps: { id }
    });

    modal.present();
  }

}
