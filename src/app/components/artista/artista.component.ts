import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyServiceService } from 'src/app/services/spotify-service.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent implements OnInit {
  artista: any = {};
  topTracks: any[] = [];
  carga: boolean;
  error: boolean;

  constructor(private activatR: ActivatedRoute, private servicio: SpotifyServiceService) {
    this.carga = true;
    this.error = false;
    this.activatR.params.subscribe((params: any) => this.getArtista(params.id));
    this.activatR.params.subscribe((params: any) => this.getTopTracks(params.id));
  }

  ngOnInit(): void {
  }

  getArtista(id: string) {
    this.servicio.getArtista(id).subscribe((data: any) => {
      this.artista = data;
      this.carga = false;
    });
  }
  getTopTracks(id: string){
    this.servicio.getTopTracks(id).subscribe((data: any )  => {
      this.topTracks = data;
      console.log(this.topTracks);
    }, (error: any) => {
      this.error = true;
      console.log(error);
    });
  }

}
