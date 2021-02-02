import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/interfaces';

@Component({
  selector: 'app-slideshow-pairs',
  templateUrl: './slideshow-pairs.component.html',
  styleUrls: ['./slideshow-pairs.component.scss'],
})
export class SlideshowPairsComponent implements OnInit {
  constructor() { }
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

}
