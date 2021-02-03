import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MovieDetails } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {
  constructor(private storage: Storage) { 
    this.updateFromStorage();
  }

  private favMovies: MovieDetails[] = [];

  isFavorite = async (id: number) => {
    await this.updateFromStorage();
    return this.favMovies.some(mov => mov.id == id);
  }

  getFavorites = () => this.storage.get('favs');

  saveMovie = ( movie: MovieDetails) => {
    this.favMovies.push(movie);
    this.storage.set('favs', this.favMovies);
  }

  deleteMovie = (movie: MovieDetails) => {
    this.favMovies = this.favMovies.filter(mov => mov.id !== movie.id);
    this.storage.set('favs', this.favMovies);
  }

  private updateFromStorage = async () => {
    if (this.favMovies.length === 0)  
      await this.getFavorites().then(res => this.favMovies = res || []);
  }

}
