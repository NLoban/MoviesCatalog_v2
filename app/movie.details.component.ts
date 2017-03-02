import { DataService } from './data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'movie-details',
    templateUrl: 'app/movie.details.component.html',
    providers: [DataService]
})
export class MovieDetailsComponent implements OnInit {
    movieDetails = { data: Object, images: Object, videos: Object };
    type: string;
    movieId: string;


    constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) {
        this.type = route.snapshot.params['type'];
        this.movieId = route.snapshot.params['movieId'];
    }

    ngOnInit() {
        var details = this.dataService.getMovieDetails(this.type, this.movieId);
        details.data.subscribe(result => {
            this.movieDetails.data = result;
            console.log(this.movieDetails.data);
        });
        details.images.subscribe(result => {
            this.movieDetails.images = result;
            console.log(this.movieDetails.images);
        });
        details.videos.subscribe(result => {
            this.movieDetails.videos = result;
            console.log(this.movieDetails.videos);
        });

        // this.movieDetails = this.dataService.getMoviesList(this.route.snapshot.params['type'], this.route.snapshot.params['category']);
    }
}