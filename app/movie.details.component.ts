import { DataService } from './data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'movie-details',
    templateUrl: 'app/movie.details.component.html',
    providers: [DataService]
})
export class MovieDetailsComponent implements OnInit {
    movieDetails: any;

    constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) {

    }

    ngOnInit() {
        this.movieDetails = this.dataService.getMoviesList(this.route.snapshot.params['type'], this.route.snapshot.params['category']);
    }
}