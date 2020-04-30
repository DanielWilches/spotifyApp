import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Protocolo HTTP
import { HttpClientModule } from '@angular/common/http';
// service
import { SpotifyServiceService } from '../app/services/spotify-service.service';
// Rutas
import { APP_ROUTING} from './app.routes';
// componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { SearchComponent } from './components/search/search.component';
// componentes compartidos
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { TarjetasComponent } from './components/shared/tarjetas/tarjetas.component';
// pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { CardErrorComponent } from './components/shared/card-error/card-error.component';



@NgModule({
  declarations: [
    // componentes
    AppComponent,
    HomeComponent,
    ArtistaComponent,
    SearchComponent,
    // componentes compartidos
    NavbarComponent,
    FooterComponent,
    TarjetasComponent,
    // pipes
    NoimagePipe,
    LoadingComponent,
    CardErrorComponent,
  ],
  imports: [
    // modulos
    BrowserModule,
    HttpClientModule,
    // rutas
    APP_ROUTING
  ],
  providers: [
    // servicios
    SpotifyServiceService
  ],
  // componente padre
  bootstrap: [AppComponent]
})
export class AppModule { }
