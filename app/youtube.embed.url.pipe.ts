import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'youtubeEmbedUrl'})
export class YoutubeEmbedUrlPipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) return value;

    // return value.replace(/\w\S*/g, function(txt) {
    //     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    // });
    
    // return $sce.trustAsResourceUrl('https://www.youtube.com/v/' + value);
    return 'https://www.youtube.com/v/' + value;
  }
}