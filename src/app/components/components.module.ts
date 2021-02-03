import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowPairsComponent } from './slideshow-pairs/slideshow-pairs.component';
import { DetailsComponent } from './details/details.component';
import { CategoryComponent } from './category/category.component';



@NgModule({
  entryComponents: [
    DetailsComponent,
    SlideshowPosterComponent
  ],
  declarations: [
    SlideshowBackdropComponent, 
    SlideshowPosterComponent,
    SlideshowPairsComponent,
    DetailsComponent,
    CategoryComponent
  ],
  exports: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowPairsComponent,
    DetailsComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
