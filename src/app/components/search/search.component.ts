import { Component, OnInit } from '@angular/core';
import { SpotifyServiceService } from '../../services/spotify-service.service';
import { error } from 'protractor';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artista: any[] = [];
  cargando: boolean;
  mensajeError: string;
  error: boolean;
  constructor(private Spotifyartis: SpotifyServiceService) { 
    this.error = false;
  }

  ngOnInit(): void {
  }

  buscar(value: string) {
    this.cargando = true;
    this.Spotifyartis.getArtistas(value).subscribe((data: any) => {
      this.artista = data;
      this.cargando = false;
    }, ( eror: any) => {
      this.mensajeError = eror.error.error.message;
      this.error = true;
      this.cargando = false;

    });
  }

}
