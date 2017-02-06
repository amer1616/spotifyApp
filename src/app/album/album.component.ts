import { SpotifyService } from './../spotify.service';
import { Artist, Album } from './../artist';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  id: string;
  artist: Artist[] = [];
  album: Album[] = [];



  constructor(private sps: SpotifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.sps.getAlbum(id)
          .subscribe(album => {
            this.album = album;


          });
      });
  }


}
