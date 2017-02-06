import { Artist } from './../artist';
import { SpotifyService } from './../spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchStr: string;
  searchRes: Artist[] = [];
  constructor(private sps: SpotifyService) { }

  searchMusic() {
    this.sps.fetchMusic(this.searchStr).subscribe(res => {
      console.log(res.artists.items);
      this.searchRes = res.artists.items;
    });
  }
  ngOnInit() {
  }

}
