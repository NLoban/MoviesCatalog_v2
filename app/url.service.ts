import { Injectable }     from '@angular/core';

@Injectable()
export class UrlService {
    private urlPart = 'https://api.themoviedb.org/3/';
    private apiKeyPart = '?api_key=8ca72ae90f15b5d823a990ab310a5160&language=';


    getInfoUrl(type: string, movieId: string, language: string = 'en') : string {
        return this.urlPart + type + '/' + movieId + this.apiKeyPart + language;
    }

    getImagesUrl(type: string, movieId: string, language: string = 'en') : string {
        return this.urlPart + type + '/' + movieId + '/images' + this.apiKeyPart + language;
    }

    getVideosUrl(type: string, movieId: string, language: string = 'en') : string {
        return this.urlPart + type + '/' + movieId + '/videos' + this.apiKeyPart + language;
    }

    getMoviesUrl(type: string, category: string, language: string = 'en') {
        return this.urlPart + type + '/' + category + this.apiKeyPart + language;
    }
}