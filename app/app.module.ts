import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { UrlService } from './url.service';
import { HomeComponent } from './home.component';
import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './movie.details.component';
import { MoviesComponent } from './movies.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const appRoutes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: ':type/details/:movieId', component: MovieDetailsComponent },
    { path: ':type/:category', component: MoviesComponent },
    // {
    //     path: '',
    //     redirectTo: '/movies',
    //     pathMatch: 'full'
    // }
    //   ,
    //   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpModule,
        JsonpModule, NgbModule.forRoot(),],
    declarations: [AppComponent, HomeComponent, MoviesComponent, MovieDetailsComponent],
    exports: [RouterModule],
    bootstrap: [AppComponent],
    providers: [UrlService, { provide: LocationStrategy, useClass: HashLocationStrategy }]
})

export class AppModule { }