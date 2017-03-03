import { Observable } from 'rxjs/Observable';
import { UrlService } from './url.service';
import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'movies',
    templateUrl: 'app/movies.component.html',
    providers: [DataService]
})
export class MoviesComponent implements OnInit {
    movies: Object[];
    type: string;
    category: string;

    constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.type = params['type'];
            this.category = params['category'];

            this.dataService.getMoviesList(this.type, this.category)
                .subscribe(result => { this.movies = result; })
        });
    }
}