import { Actors, GenreRes, MDBResp, MovieDetails, SearchResult } from 'src/app/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import * as moment from 'moment';
const { API, APIKEY } = environment;


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) { }

  private popPage:number = 0;

  private doQuery = <T>(query:string) => {
    query = `${API}${query}&api_key=${APIKEY}`;
    return this.http.get<T>(query).toPromise();
  }

  getFeature = async () => {
    const start = moment().startOf('month').format('YYYY-MM-DD');
    const end   = moment().endOf('month').format('YYYY-MM-DD');

    const from = `primary_release_date.gte=${start}`;
    const to   = `primary_release_date.lte=${end}`;

    return this.doQuery<MDBResp>(`/discover/movie/?${from}&${to}`);
  }

  getPopular = () => {
    this.popPage++;
    const query = `/discover/movie?sort_by=popularity.desc&page=${this.popPage}`
    return this.doQuery<MDBResp>(query);
  }

  getDetails = (id: string) => {
    return this.doQuery<MovieDetails>(`/movie/${id}?a=1`)
  }

  getActors = (id: string) => {
    return this.doQuery<Actors>(`/movie/${id}/credits?a=1`)
  }

  searchMovie = (title: string) => {
    return this.doQuery<SearchResult>(`/search/movie?query=${title}`)
  }

  getGenres = () => {
    return this.doQuery<GenreRes>(`/genre/movie/list?a=1`)
  }
}
