import { Pipe, PipeTransform } from '@angular/core';
import { Category, Genre, MovieDetails } from '../interfaces';

@Pipe({
  name: 'groupGender'
})
export class GroupGenderPipe implements PipeTransform {

  transform(genres:Genre[], movies:MovieDetails[]): unknown {

    const categories:Category[] = [];
    


    genres.forEach(genre => {

      let filteredMovies:MovieDetails[] = [];
      filteredMovies = movies.filter( mv => mv.genres.some( gn => gn.id === genre.id));

      if (filteredMovies.length > 0 )
        categories.push({ 
          name:genre.name,
          movies: filteredMovies
        })
    });

    return categories;
  }

}
