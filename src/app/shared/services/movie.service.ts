import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Some Params
const options = {
  params: {
    include_adult: 'false',
    include_video: 'false',
    language: 'en-US',
    sort_by: 'popularity.desc',
    page: '1',
  },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGJkZjVmODkyNTA1YTk3M2ZmMTVmNGYxMWM4NWZhNiIsIm5iZiI6MTcyNjU3Mjc2MC45Mzg2NjMsInN1YiI6IjY2ZTk2NzRhODJmZjg3M2Y3ZDFlYWZkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QFGQhAUFQAfAOaAlphUERj6YDGr2f9eUeT-3Rec2Zck',
  },
};

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  //   Get All the Movies
  getMovies() {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/discover/movie',
      options
    );
  }

  getTvShows() {
    return this.http.get('https://api.themoviedb.org/3/discover/tv', options);
  }

  getRatedMovies() {
    return this.http.get(
      'https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies',
      options
    );
  }

  getBannerImage(id: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/images`,
      options
    );
  }

  getBannerVideo(id: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      options
    );
  }

  getBannerDetail(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}`, options);
  }

  getNowPlayingMovies() {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/now_playing',
      options
    );
  }

  getPopularMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular', options);
  }

  getTopRated() {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/top_rated',
      options
    );
  }

  getUpcomingMovies() {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/upcoming',
      options
    );
  }
}
