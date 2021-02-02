import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {
  constructor() { }
  ngOnInit() {}
  
  @Input() movies: Movie[] = [];
  slideOpts = {
    slidesPerView: 1.2,
    freeMode: true
  }

}
