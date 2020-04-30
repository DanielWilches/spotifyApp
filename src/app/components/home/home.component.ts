import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyServiceService } from '../../services/spotify-service.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  cargando: boolean;
  error: boolean;
  mensaje: string;
  constructor( private http: HttpClient, private serviceSpotify: SpotifyServiceService ) {
    this.cargando = true;
    this.error = false;
    this.getNewRealeses();
   }

  ngOnInit(): void {
  }
  getNewRealeses(){
    this.serviceSpotify.getNewRealeses().subscribe( (data: any) =>  {
      this.cargando = false;
      return this.nuevasCanciones = data;
    }, (error: any) => {
      this.error = true;
      this.cargando = false;
      this.mensaje = error.error.error.message;
    });
  }
}
