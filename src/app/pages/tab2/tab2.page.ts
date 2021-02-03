import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces';
import { MoviesService } from 'src/app/services/movies.service';
import { ModalController } from '@ionic/angular';
import { DetailsComponent } from 'src/app/components/details/details.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  constructor(
    private movieService: MoviesService,
    private modalCtrl: ModalController
  ) { }
  ngOnInit(){ }

  searchText: string = "";
  topSearch = ["Spiderman", "Avengers", "The lord of the rings", "Dark Phoenix", "Parasite", "The Irishman", "Captain Marvel"]
  results: Movie[] = [];
  showSpinner = false;


  onSearchChange = async ({ detail }) => {
    const { value } = detail;
    if (value === '') {
      this.results = [];
      return;
    }
    this.showSpinner = true;
    await this.movieService.searchMovie(value)
      .then( res => this.results = res.results );
    
      this.showSpinner = false;
  }

  showDetails = async (id: string) => {
    const modal = await this.modalCtrl.create({
      component: DetailsComponent,
      componentProps: { id }
    });

    modal.present();
  }

}
