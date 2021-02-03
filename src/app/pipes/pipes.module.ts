import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './imagen.pipe';
import { PairsPipe } from './pairs.pipe';
import { GroupGenderPipe } from './group-gender.pipe';



@NgModule({
  declarations: [ImagenPipe, PairsPipe, GroupGenderPipe],
  exports: [
    ImagenPipe,
    PairsPipe,
    GroupGenderPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
