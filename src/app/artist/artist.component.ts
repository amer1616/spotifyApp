import { SpotifyService } from './../spotify.service';
import { Artist, Album } from './../artist';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  id: string;
  artist: Artist[] = [];
  albums: Album[] = [];
  images: any[] = [];
  constructor(private sps: SpotifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe(
      (id) => {
        this.sps.getArtist(id)
          .subscribe(artist => {
            this.artist = artist;
            this.images = artist.images;
          });
      }
      );
  }

}
