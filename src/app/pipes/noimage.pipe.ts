import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): any {
    if (!images) {
      return `assets/img/14.1 noimage.png.png`;
    }
    if (images.length > 0) {
      return images[0].url;
    } else {
      return `assets/img/14.1 noimage.png.png`;
    }
  }
}
