import { UrlService } from './url.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    returnValue: Object[];

    constructor(private urlService: UrlService, private http: Http) {
    }

    getMovieDetails(type: string, movieId: string, language: string = 'en') {
        var movie = {
            info: this.GetData(this.urlService.getInfoUrl(type, movieId, language)),
            images: this.GetData(this.urlService.getImagesUrl(type, movieId, language)),
            videos: this.GetData(this.urlService.getVideosUrl(type, movieId, language))
        }
        return movie;
    }

    getMoviesList(type: string, category: string, language: string = 'en') {
        return this.GetData(this.urlService.getMoviesUrl(type, category, language));
    }

    private GetData(url: string) : Observable<Object[]>{
        return this.http.get(url)
            .map(responce => this.extractData(responce));
    }

    private extractData(res: Response) {
        let body = res.json();
        return (body.results == null ? body : body.results);
    }
}