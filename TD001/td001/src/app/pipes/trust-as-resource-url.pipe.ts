import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'trustAsResourceUrl'
})

export class TrustAsResourceUrlPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){}
  transform(url:string) {

    let sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl(url);
    return sanitizedUrl;
  }

}
