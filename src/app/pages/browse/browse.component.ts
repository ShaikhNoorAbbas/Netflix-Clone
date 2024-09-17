import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie.service';
import { IVideoContent } from 'src/app/shared/models/video-content.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
})
export class BrowseComponent implements OnInit {
  userName = JSON.parse(sessionStorage.getItem('loggedInUser')!).name;
  email = JSON.parse(sessionStorage.getItem('loggedInUser')!).email;
  userProfileImage = JSON.parse(sessionStorage.getItem('loggedInUser')!)
    .picture;
  bannerDetails = new Observable<any>();
  bannerVideos = new Observable<any>();
  constructor(private movieService: MovieService) {}
  popularMovies: IVideoContent[] = [];
  movies: IVideoContent[] = [];
  tvShows: IVideoContent[] = [];
  ratedMovies: IVideoContent[] = [];
  nowPlayingMovies: IVideoContent[] = [];
  topRatedMovies: IVideoContent[] = [];
  upcomingMovies: IVideoContent[] = [];

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((respone: any) => {
      console.log(respone);
      this.popularMovies = respone.results;
    });

    this.movieService.getTvShows().subscribe((respone: any) => {
      console.log(respone);
      this.tvShows = respone.results;
    });

    this.movieService.getRatedMovies().subscribe((respone: any) => {
      console.log(respone);
      this.ratedMovies = respone.results;
    });

    this.movieService.getNowPlayingMovies().subscribe((respone: any) => {
      console.log(respone);
      this.nowPlayingMovies = respone.results;
    });

    this.movieService.getTopRated().subscribe((respone: any) => {
      console.log(respone);
      this.topRatedMovies = respone.results;
    });

    this.movieService.getUpcomingMovies().subscribe((respone: any) => {
      console.log(respone);
      this.upcomingMovies = respone.results;
    });
    this.movieService.getMovies().subscribe((response: any) => {
      this.movies = response.results;
      this.bannerDetails = this.movieService.getBannerDetail(
        response.results[0].id
      );
      this.bannerVideos = this.movieService.getBannerVideo(
        response.results[0].id
      );
    });
    console.log(this.movies);
  }
}
