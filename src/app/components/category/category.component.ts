import { Component, Input, OnInit } from '@angular/core';
import { Genre, MovieDetails } from 'src/app/interfaces';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

  @Input() movies: MovieDetails[] = []
  @Input() genres: Genre[] = []

}
