import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {
  constructor() { }
  ngOnInit() {}
  
  @Input() movies: Movie[] = [];
  slideOpts = {
    slidesPerView: '3.3',
    freeMode: true
  }
}
