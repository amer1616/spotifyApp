import { SpotifyService } from './spotify.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AboutComponent,
    NavbarComponent,
    ArtistComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
