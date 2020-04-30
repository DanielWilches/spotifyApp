import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// importacon de la libreia  rxjs
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyServiceService {
  NEWREALESES: string;
  constructor(private http: HttpClient) {
    this.NEWREALESES = 'browse/new-releases';
  }
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDsmyS5TId1eW2pgqkdBAn_F7y3CA97LGNO-NLvdOwC2Ulv3qBMPsbjh16jh_QxEsa9gRpE84B0PGBuzMY'
    });
    return this.http.get(url, { headers });
  }
  getNewRealeses() {
    return this.getQuery(this.NEWREALESES).pipe(map((data: any) => data.albums.items));
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist`).pipe(map((data: any) => data.artists.items));
  }

  getArtista(id: string){
    return this.getQuery(`artists/${id}`);
  }
  getTopTracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map((data: any) => data.tracks ));
  }
}
