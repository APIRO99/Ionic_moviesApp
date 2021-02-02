import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.APIIMGPATH;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, size: string='w500'): unknown {
    if ( !img ) return './assets/no-image-banner.jpg';
    else return `${URL}/${size}${img}`
  }

}
