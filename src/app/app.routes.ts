import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const router: Routes = [
    { path: '', redirectTo: 'search', pathMatch: 'full' },
    { path: 'search', component: SearchComponent },
    { path: 'about', component: AboutComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: 'album/:id', component: AlbumComponent },

];


export const routes: ModuleWithProviders = RouterModule.forRoot(router);

